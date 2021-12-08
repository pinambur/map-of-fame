import { ENDPOINT_ORIGIN } from "../constants";

const getGeoRect = (geoRect) =>
  `&geoRect[0][lat]=${geoRect[0].lat}&geoRect[0][lng]=${geoRect[0].lng}&geoRect[1][lat]=${geoRect[1].lat}&geoRect[1][lng]=${geoRect[1].lng}`;

const getCategories = (categories) =>
  categories.reduce(
    (acc, category, index) => acc.concat(`&category[${index}]=${category}`),
    ""
  );

export const LOGIN = () => `${ENDPOINT_ORIGIN}/api/login`;

export const VERIFY = () => `${ENDPOINT_ORIGIN}/api/verify`;

export const USER = () => `${ENDPOINT_ORIGIN}/api/user`;

export const USER_ID = (id) => `${ENDPOINT_ORIGIN}/api/user/${id}`;

export const USER_ID_SPOTS = (id, limit, offset, year) => {
  let url = `${ENDPOINT_ORIGIN}/api/user/${id}/spots?limit=${limit}&offset=${offset}`;
  if (typeof year === "string") {
    url = url.concat(`&year=${year}`);
  }
  return url;
};

export const USER_PASSWORD = () => `${ENDPOINT_ORIGIN}/api/user/password`;

export const USER_PASSWORD_TOKEN = () =>
  `${ENDPOINT_ORIGIN}/api/user/password/token`;

export const INVITES_GET_FOR_USER = () =>
  `${ENDPOINT_ORIGIN}/api/invites/getForUser`;

export const USER_SEARCH = (artist, crew) => {
  let url = `${ENDPOINT_ORIGIN}/api/user/search/`;
  if (artist) {
    url = url.concat(`?artist=${artist}`);
  }
  if (crew) {
    url = artist ? url.concat("&") : url.concat("?");
    url = url.concat(`crew=${crew}`);
  }
  return url;
};

export const USER_CATEGORY = () => `${ENDPOINT_ORIGIN}/api/usercategory`;

export const PRE_REG_EMAIL = () => `${ENDPOINT_ORIGIN}/api/prereg/email`;

export const PRE_REG_CONTACT = () => `${ENDPOINT_ORIGIN}/api/prereg/contact`;

export const FIRM = () => `${ENDPOINT_ORIGIN}/api/firm`;

export const FIRM_ID = (id) => `${ENDPOINT_ORIGIN}/api/firm/${id}`;

export const AVAILABILITY = () => `${ENDPOINT_ORIGIN}/api/availability`;

export const AVAILABILITY_ID = (id) =>
  `${ENDPOINT_ORIGIN}/api/availability/${id}`;

export const CATEGORY = () => `${ENDPOINT_ORIGIN}/api/category`;

export const CATEGORY_ID = (id) => `${ENDPOINT_ORIGIN}/api/category/${id}`;

export const COUNTRY = () => `${ENDPOINT_ORIGIN}/api/country`;

export const COUNTRY_SEARCH = (ip) =>
  `${ENDPOINT_ORIGIN}/api/country/search?ip=${ip}`;

export const SETTINGS = () => `${ENDPOINT_ORIGIN}/api/settings`;

export const SPOT = () => `${ENDPOINT_ORIGIN}/api/spot`;

export const SPOT_YEAR = (year, geoRect, categories) => {
  let url = `${ENDPOINT_ORIGIN}/api/spot?year=${year}${getGeoRect(geoRect)}`;
  if (categories) {
    url = url.concat(getCategories(categories));
  }
  return url;
};

export const SPOT_LIMIT_DAYS = (limitDays, geoRect, categories) => {
  let url = `${ENDPOINT_ORIGIN}/api/spot?limitDays=${limitDays}${getGeoRect(
    geoRect
  )}`;
  if (categories) {
    url = url.concat(getCategories(categories));
  }
  return url;
};

export const SPOT_ID = (id) => `${ENDPOINT_ORIGIN}/api/spot/${id}`;

export const SPOT_ID_FEEDBACK = (id) =>
  `${ENDPOINT_ORIGIN}/api/spot/${id}/feedback`;

export const SPOT_SEARCH = () => `${ENDPOINT_ORIGIN}/api/spot/search`;
