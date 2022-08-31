import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit';
import {studentsReducer} from "./studentsReducer";
import {campusesReducer} from "./campusesReducer";

export const store = configureStore({
    reducer: {
        campusesReducer,
        studentsReducer
    }
})