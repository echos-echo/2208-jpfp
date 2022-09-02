import Axios from "axios";

// ***ACTION TYPES***
const _getCampuses = 'GET_CAMPUSES';
const _getCampus = 'GET_CAMPUS';
const _addCampus = 'ADD_CAMPUS';
const _deleteCampus = 'DELETE_CAMPUS';
const _updateCampus = 'UPDATE_CAMPUS';
const _clearCampus = 'CLEAR_CAMPUS';
const _removeStudent = 'REMOVE_STUDENT';

// ***ACTION CREATORS***
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

const addCampus = data => {
    return {
        type: _addCampus,
        campus: data
    }
}

const deleteCampus = data => {
    return {
        type: _deleteCampus,
        campus: data
    }
}

const updateCampus = data => {
    return {
        type: _updateCampus,
        campus: data
    }
}

export const removeStudent = data => {
    return {
        type: _removeStudent,
        student: data
    }
}

export const clearCampus = () => {
    return {
        type: _clearCampus,
        campus: null
    }
}

// ***THUNKS***
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

export const deleteCampusThunk = campusData => {
    return async dispatch => {
        await Axios.delete(`/api/campuses/${campusData.id}`, campusData)
            .then(res => dispatch(deleteCampus(res.data)))
            .catch(err => console.error(err));
    }
}

export const updateCampusThunk = campusData => {
    return async dispatch => {
        await Axios.put(`/api/campuses/${campusData.id}`, campusData)
            .then(res => dispatch(updateCampus(res.data)))
            .catch(err => console.error(err));
    }
}

// ***REDUCER FOR CAMPUSES***
export const campusesReducer = (state = {}, action) => {
    switch (action.type) {
        case _getCampuses:
            return { ...state, campuses: action.campuses };
        case _getCampus:
            return { ...state, campus: action.campus };
        case _addCampus:
            return { ...state, campuses: [...state.campuses, action.campus] };
        case _updateCampus:
            return { ...state, campus: action.campus };
        case _deleteCampus:
            const index = state.campuses.findIndex(campus => campus.id === action.campus.id);
            const newCampuses = [...state.campuses];
            newCampuses.splice(index, 1);
            return { ...state, campuses: newCampuses };
        case _clearCampus:
            return { ...state, campus: action.campus };
        case _removeStudent:
            const toRemoveIndex = state.campus.students.findIndex(student => student.id === action.student.id);
            const newStudents = [...state.campus.students];
            newStudents.splice(toRemoveIndex, 1);
            return { ...state, campus: { ...state.campus, students: newStudents}};
        default:
            return state;
    }
}