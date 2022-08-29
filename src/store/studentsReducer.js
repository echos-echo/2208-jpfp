import Axios from "axios";

const _getStudents = 'GET_STUDENTS';

const getStudents = data => {
    return {
        type: _getStudents,
        students: data
    }
}

export const getAllStudentsThunk = () => {
    return async dispatch => {
        await Axios.get('/api/students')
            .then(res => dispatch(getStudents(res.data)))
            .catch(err => console.error(err));
    }
}

export const studentsReducer = (state = {}, action) => {
    switch (action.type) {
        case _getStudents:
            return { ...state, students: action.students};
        default:
            return state;
    }
}