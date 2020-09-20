import { DEFAULT_ZOOM, DEFAULT_VIEW } from "../constants";
import { addRandomMarkers } from "../stubs/randomMarkersStub";
import { permalink } from "./permalink";

const getLocationByIp = () =>
  fetch("https://ipinfo.io/json?token=c97eec3767f442")
    .then((response) => response.json())
    .then((data) => {
      const { loc } = data;
      return {
        center: loc.split(",").map((item) => +item),
        zoom: DEFAULT_ZOOM,
      };
    });

const getLocation = async () => {
  const locationFromUrl = permalink.getMapLocation();
  if (locationFromUrl) {
    return locationFromUrl;
  }
  if (navigator.geolocation) {
    try {
      const position = await new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
      });
      const { latitude, longitude } = position.coords;
      return { center: [+latitude, +longitude], zoom: DEFAULT_ZOOM };
    } catch (e) {
      const location = await getLocationByIp();
      return { center: location, zoom: DEFAULT_ZOOM };
    }
  }
  return getLocationByIp();
};

export const setLocation = (map) => {
  getLocation()
    .then((response) => {
      map.setView(response.center, response.zoom);
    })
    .catch(() => {
      map.setView(DEFAULT_VIEW.coordinates, DEFAULT_VIEW.zoom);
    })
    .finally(() => {
      addRandomMarkers(map);
      permalink.setup(map);
    });
};