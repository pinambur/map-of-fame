import {
  categories,
  huntersFilter,
  markerIdFromUrl,
  markersStore,
  selectedArtist,
  selectedCategory,
  selectedYear,
  settings,
} from "../../store";
import { normalizeCoords } from "./locationUtils";
import { validateYear } from "../datesUtils";
import { getCategories } from "../../api/settings";
import { setMarkerData } from "./markersUtils";

let shouldUpdate = true;
let mapInstance = null;
let prevParams = null;
let arrMarkers = [];
let settingsObj = {};
let categoriesList = [];
let yearFromStore = null;
let huntersFilterValue = null;
let selectedCategoryValue = null;
let selectedArtistValue = null;

markersStore.subscribe((values) => {
  arrMarkers = values;
});

settings.subscribe((value) => {
  settingsObj = value;
});

categories.subscribe((values) => {
  categoriesList = values;
});

selectedYear.subscribe((value) => {
  yearFromStore = value;
});

huntersFilter.subscribe((value) => {
  huntersFilterValue = value;
});

selectedCategory.subscribe((value) => {
  selectedCategoryValue = value;
});

selectedArtist.subscribe((value) => {
  selectedArtistValue = value;
});

const update = ({ mapContainer, params, clearParams }) => {
  if (!shouldUpdate) {
    // do not update the URL when the view was changed in the 'popstate' handler (browser history navigation)
    shouldUpdate = true;
    return;
  }
  const map = mapContainer || mapInstance;
  const year = yearFromStore;
  let paramsToSet = prevParams || "";

  const center = map?.getCenter();
  const latitude = center && normalizeCoords(center.lat);
  const longitude = center && normalizeCoords(center.lng);
  const zoom = map?.getZoom();
  if (
    params ||
    selectedCategoryValue ||
    huntersFilterValue ||
    selectedArtistValue
  ) {
    const category = params
      ? params.category
      : selectedCategoryValue.map((cat) => cat.id);
    const artist = params ? params.artist : selectedArtistValue;
    const hunters = params ? params.hunters : huntersFilterValue;
    const marker = params?.marker;
    paramsToSet = "";
    if (category?.length) {
      paramsToSet = paramsToSet.concat(`&category=${category.join(",")}`);
      if (artist) {
        paramsToSet = paramsToSet.concat(`&artist=${artist}`);
      }
      if (hunters || hunters === false) {
        paramsToSet = paramsToSet.concat(`&hunters=${hunters}`);
      }
    }
    if (marker) {
      const paramsStr = prevParams || paramsToSet;
      paramsToSet = paramsStr.concat(`&marker=${marker}`);
    }
    prevParams = paramsToSet;
  }
  if (clearParams === "all") {
    prevParams = null;
    paramsToSet = "";
  }
  if (clearParams && Array.isArray(clearParams)) {
    paramsToSet = new URLSearchParams(prevParams.substring(1));
    clearParams.forEach((param) => {
      paramsToSet.delete(param);
    });
    paramsToSet = paramsToSet.toString() ? `&${paramsToSet}` : "";
    prevParams = paramsToSet;
  }
  const search = `?coords=${latitude},${longitude}&zoom=${zoom}&year=${year}${paramsToSet}`;
  const state = { zoom, center, year, params };
  window.history.pushState(state, "map", search);
};

const setSelectedCategoryIfValid = (categoriesFromUrl) => {
  // Hardcoded category IDs to simplify logic.
  // Anyway if those IDs not valid request to get all spots will be sent in locationUtils
  const categoryIds = [1, 2, 3, 4, 5, 6];
  // const categoryIds = categoriesList.map((item) => item.id);
  const isValidCategories = categoriesFromUrl.every((cat) =>
    categoryIds.includes(+cat)
  );
  if (isValidCategories) {
    // const categoriesToSet = categoriesList.filter((category) =>
    //   categoriesFromUrl.includes(`${category.id}`)
    // );
    selectedCategory.set(categoriesFromUrl.map((id) => ({ id: +id })));
    update({ params: { category: categoriesFromUrl } });
  }
};

const getDataFromParams = (params) => {
  const year = params.get("year");
  const categoryFromUrl = params.get("category");
  const category = categoryFromUrl && categoryFromUrl.split(",");
  const artist = params.get("artist");
  const hunters = params.get("hunters");
  const marker = params.get("marker");
  return { year, category, artist, hunters, marker };
};

const setStateFromUrl = (params) => {
  const { year, category, artist, hunters, marker } = getDataFromParams(params);
  if (
    year &&
    validateYear(
      year,
      settingsObj.yearStart,
      JSON.parse(settingsObj.additionalYears)
    )
  ) {
    selectedYear.set(year);
  }
  if (category) {
    setSelectedCategoryIfValid(category);
    if (categoriesList.length === 0) {
      getCategories().then((response) => {
        const { success, result } = response;
        if (success && result) {
          categories.set(result);
          // setSelectedCategoryIfValid(category);
        }
      });
    }
    if (artist) selectedArtist.set(artist);
    if (hunters) {
      huntersFilter.set(JSON.parse(hunters.toLowerCase()));
    }
  }
  if (marker && !Number.isNaN(+marker)) {
    markerIdFromUrl.set(marker);
  }
};

const setParamsFromState = (year, params) => {
  const { category, artist, hunters, marker } = params;
  selectedYear.set(year);
  if (category) selectedCategory.set(category);
  if (artist) selectedArtist.set(artist);
  if (hunters) huntersFilter.set(hunters);
  if (marker && arrMarkers && arrMarkers.length) {
    const markerData = arrMarkers.find((item) => item.id === +marker);
    if (markerData) {
      setMarkerData(markerData);
    }
  }
};

const getMapLocation = (zoom, center) => {
  let newZoom = zoom;
  let newCenter = center;
  const search = window.location.search;
  if (search) {
    const params = new URLSearchParams(search);
    const coords = params.get("coords").split(",");
    newCenter = coords.map((coordinate) => parseFloat(coordinate, 10));
    newZoom = +params.get("zoom");
    setStateFromUrl(params);
  }
  return newZoom || newCenter ? { zoom: newZoom, center: newCenter } : null;
};

const getSearchUrlFromParams = (coords, zoom, year, params) => {
  let paramsToSet = "";
  if (params) {
    Object.keys(params).forEach((param) => {
      paramsToSet = paramsToSet.concat(`&${param}=${params[param]}`);
    });
  }
  const lat = normalizeCoords(coords.lat);
  const lng = normalizeCoords(coords.lng);
  return `?coords=${lat},${lng}&zoom=${zoom}&year=${year}${paramsToSet}`;
};
const set = (coords, zoom, year, params) => {
  const state = { zoom, center: coords, year, params };
  window.history.pushState(
    state,
    "map",
    getSearchUrlFromParams(coords, zoom, year, params)
  );
};
const getCustomUrl = (coords, zoom, year, params) => {
  const { origin, pathname } = window.location;
  const search = getSearchUrlFromParams(coords, zoom, year, params);
  return `${origin}${pathname}${search}`;
};
const setup = (map) => {
  shouldUpdate = true;

  map.on("moveend", () => update({ mapContainer: map }));

  // restore the view state when navigating through the history, see
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
  const popStateHandler = (event) => {
    if (event.state === null) {
      return;
    }
    const { center, zoom, year, params } = event.state;
    if (params) setParamsFromState(year, params);
    map.setView(center, zoom);
    shouldUpdate = false;
  };
  mapInstance = map;
  window.addEventListener("popstate", popStateHandler);
  update({ mapContainer: mapInstance });
};

export const permalink = {
  // gets the map center, zoom-level and rotation from the URL if present, else uses default values
  getMapLocation,
  setup,
  update,
  set,
  getCustomUrl,
  getDataFromParams,
};
