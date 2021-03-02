import actionConstants from "../actionConstants";
import { locationExtraction } from "../../lib/dataExtractionFunction";

const initialState = {
  locationList: [],
  categoryList: {},
  selectedLocation: null,
};

export default function masterDataReducer(state = initialState, action) {
  switch (action.type) {
    case actionConstants.SET_MASTER_DATA:
      return {
        ...state,
        locationList: [...locationExtraction().locationsName],
        categoryList: {...locationExtraction().categories}
      };

    case actionConstants.GET_CATEGORY_LIST:
      return {
        ...state,
        selectedLocation: action.payload,
      };

    case actionConstants.SELECTED_LOCATION:
      return {
        ...state,
        selectedLocation: action.payload,
      };

    case actionConstants.RESET_SELECTED_LOCATION:
      return {
        ...initialState,
      };
    default:
      return { ...state };
  }
}
