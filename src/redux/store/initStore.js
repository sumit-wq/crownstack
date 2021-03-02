import { createStore } from 'redux'
import makeRootReducer from '../reducers';

const rootStore = (initialState = {}) => {
    const store = createStore(
        makeRootReducer(),
        initialState,
    );
    return store;
}

export default rootStore;