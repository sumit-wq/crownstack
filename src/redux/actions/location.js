import actionConstants from "../actionConstants";

export function getLocationList() {
  return { type: actionConstants.GET_LOCATION_LIST };
}

export function setMasterData() {
  return { type: actionConstants.SET_MASTER_DATA };
}

export function getCategories(payload) {
  return { type: actionConstants.GET_CATEGORY_LIST, payload };
}

export function setLocation(payload) {
  return { type: actionConstants.SELECTED_LOCATION, payload };
}

export function selectLocation(payload) {
  return { type: actionConstants.SELECTED_LOCATION, payload };
}

export function resetLocationReducer() {
  return { type: actionConstants.RESET_SELECTED_LOCATION };
}
