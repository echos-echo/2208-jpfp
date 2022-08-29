import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit';
import {studentsReducer} from "./studentsReducer";
import {campusesReducer} from "./campusesReducer";

// function configureStore() {
//     // return createStore(########, applyMiddleware(thunk));
// }

// export default configureStore;

export const store = configureStore({
    reducer: {
        campusesReducer,
        studentsReducer
    }
})