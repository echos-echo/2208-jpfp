import Axios from "axios";

const _getStudents = 'GET_STUDENTS';
const _getStudent = 'GET_STUDENT';
const _addStudent = 'ADD_STUDENT';

const getStudents = data => {
    return {
        type: _getStudents,
        students: data
    }
}

const getStudent = data => {
    return {
        type: _getStudent,
        student: data
    }
}

const addStudent = data => {
    return {
        type: _addStudent,
        student: data
    }
}

export const getAllStudentsThunk = () => {
    return async dispatch => {
        await Axios.get('/api/students')
            .then(res => dispatch(getStudents(res.data)))
            .catch(err => console.error(err));
    }
}

export const getOneStudentThunk = studentId => {
    return async dispatch => {
        await Axios.get(`/api/students/${studentId}`)
            .then(res => dispatch(getStudent(res.data)))
            .catch(err => console.error(err));
    }
}

export const addStudentThunk = studentData => {
    return async dispatch => {
        await Axios.post(`/api/students`, studentData)
            .then(res => dispatch(addStudent(res.data)))
            .catch(err => console.error(err));
    }
}

export const studentsReducer = (state = {}, action) => {
    switch (action.type) {
        case _getStudents:
            return { ...state, students: action.students };
        case _getStudent:
            return { ...state, student: action.student };
        case _addStudent:
            return { ...state, students: [...state.students, action.student] }
        default:
            return state;
    }
}