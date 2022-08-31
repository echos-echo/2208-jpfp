import Axios from "axios";

const _getCampuses = 'GET_CAMPUSES';
const _getCampus = 'GET_CAMPUS';
const _addCampus = 'ADD_CAMPUS';

const getCampuses = data => {
    return {
        type: _getCampuses,
        campuses: data
    }
}

const getCampus = data => {
    return {
        type: _getCampus,
        campus: data
    }
}

const addCampus = campusData => {
    return {
        type: _addCampus,
        campus: campusData
    }
}

export const getAllCampusesThunk = () => {
    return async dispatch => {
        await Axios.get('/api/campuses')
            .then(res => dispatch(getCampuses(res.data)))
            .catch(err => console.error(err));
    }
}

export const getCampusThunk = campusId => {
    return async dispatch => {
        await Axios.get(`/api/campuses/${campusId}`)
            .then(res => dispatch(getCampus(res.data)))
            .catch(err => console.error(err));
    }
}

export const addCampusThunk = campusData => {
    return async dispatch => {
        await Axios.post(`/api/campuses`, campusData)
            .then(res => dispatch(addCampus(res.data)))
            .catch(err => console.error(err));
    }
}

export const campusesReducer = (state = {}, action) => {
    switch (action.type) {
        case _getCampuses:
            return { ...state, campuses: action.campuses };
        case _getCampus:
            return { ...state, campus: action.campus };
        case _addCampus:
            return { ...state, campuses: [...state.campuses, action.campus] }
        default:
            return state;
    }
}