import { writable } from "svelte/store";

import { getCurrentYear } from "./utils/commonUtils";

import { DEFAULT_ZOOM } from "./constants";

export const isInitialized = writable(false);
export const isPermalinkReady = writable(false);
export const isUserVerifyProgress = writable(false);
export const isLoggedIn = writable(false);
export const globalGoto = writable(null);
export const map = writable(null);
export const currentZoom = writable(DEFAULT_ZOOM);
export const selectedYear = writable(`${getCurrentYear()}`);
export const selectedArtist = writable("");
export const selectedCrew = writable("");
export const openedMarkerData = writable(null);
export const editSpotData = writable({});
export const markersStore = writable({});
export const isSearchResults = writable(false);
export const userData = writable({});
export const countriesList = writable([]);
export const settings = writable({});
export const categoriesList = writable([]);
export const firms = writable([]);
export const userCategories = writable([]);
export const isLoading = writable(false);
export const isLighthouseActive = writable(false);
export const mapBounds = writable([]);
export const areaSelection = writable(null);
export const areaSpots = writable(null);
export const selectedUserProfileData = writable({});
export const searchControl = writable(null);
export const isActiveSearchControl = writable(false);
export const shouldDisplayShowOnMap = writable(false);
export const isShowOnMapMode = writable(false);
export const isAreaSelectionActive = writable(false);
export const isSpotsFromAreaLoading = writable(false);
export const isFirstTimeVisit = writable(false);
export const shouldShowAddSpot = writable(null);
export const shouldShowResetPassword = writable(false);
export const resetPasswordToken = writable(null);
