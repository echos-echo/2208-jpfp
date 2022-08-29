import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit';

// function configureStore() {
//     // return createStore(########, applyMiddleware(thunk));
// }

// export default configureStore;

export const store = configureStore({
    reducer: {
        // some reducers go here
    }
})