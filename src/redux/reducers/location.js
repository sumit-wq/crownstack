import actionConstants from "../actionConstants";

const initialState = {
    locationList: [],
    selectedLocation: null,
}

export default function locationReducer (state = initialState, action) {
    switch(action.type) {

        case actionConstants.SELECTED_LOCATION:
            return {
                ...state,
                selectedLocation: action.payload,
            }    

        case actionConstants.RESET_SELECTED_LOCATION:
            return {
                ...initialState,
            }    
            default:
                return {...state};
    }
}