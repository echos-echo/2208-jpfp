import Axios from "axios";
import { useDispatch } from "react-redux";

const _getCampuses = 'GET_CAMPUSES';

const getCampuses = data => {
    return {
        type: _getCampuses,
        campuses: data
    }
}

export const getAllCampusesThunk = () => {
    return async dispatch => {
        await Axios.get('/api/campuses')
            .then(res => dispatch(getCampuses(res.data)))
            .catch(err => console.error(err));
    }
}

export default campusesReducer = (state = {}, action) => {
    switch (action.type) {
        case _getCampuses:
            return { ...state, campuses: action.campuses};
        default:
            return state;
    }
}