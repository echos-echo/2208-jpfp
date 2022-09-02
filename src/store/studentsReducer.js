import Axios from "axios";

const _getStudents = 'GET_STUDENTS';
const _getStudent = 'GET_STUDENT';
const _addStudent = 'ADD_STUDENT';
const _deleteStudent = 'DELETE_STUDENT';
const _updateStudent = 'UPDATE_STUDENT';
const _clearStudent = 'CLEAR_STUDENT';

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

const deleteStudent = data => {
    return {
        type: _deleteStudent,
        student: data
    }
}

const updateStudent = data => {
    return {
        type: _updateStudent,
        student: data
    }
}

export const clearStudent = () => {
    return {
        type: _clearStudent,
        student: null
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

export const deleteStudentThunk = studentData => {
    return async dispatch => {
        await Axios.delete(`/api/students/${studentData.id}`, studentData)
            .then(res => dispatch(deleteStudent(res.data)))
            .catch(err => console.error(err));
    }
}

export const updateStudentThunk = studentData => {
    return async dispatch => {
        await Axios.put(`/api/students/${studentData.id}`, studentData)
            .then(res => dispatch(updateStudent(res.data)))
            .catch(err => console.error(err));
    }
}

export const removeFromCampusThunk = studentData => {
    return async dispatch => {
        await Axios.put(`/api/students/${studentData.id}`, studentData)
            .then(res => dispatch(updateStudent(res.data)))
            .catch(err => console.error(err));
    }
}

export const studentsReducer = (state = {students: []}, action) => {
    switch (action.type) {
        case _getStudents:
            return { ...state, students: action.students };
        case _getStudent:
            return { ...state, student: action.student };
        case _addStudent:
            return { ...state, students: [...state.students, action.student] };
        case _updateStudent:
            return { ...state, student: action.student};
        case _deleteStudent:
            const indexToDelete = state.students.findIndex(student => student.id === action.student.id);
            const newStudents = [...state.students];
            newStudents.splice(indexToDelete, 1);
            return { ...state, students: newStudents };
        case _clearStudent:
            return { ...state, student: action.student };
        default:
            return state;
    }
}