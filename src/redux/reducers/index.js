import { combineReducers } from "redux";
import locationReducer from "./location";
import masterDataReducer from "./masterData";

const reducers = {
    locationReducer,
    masterDataReducer,
};

const appReducers = combineReducers(reducers);

const rootReducer = (state, action) => {
    const appState = state;
    return appReducers(appState, action);
};

export default function makeRootReducer() {
    return rootReducer;
}