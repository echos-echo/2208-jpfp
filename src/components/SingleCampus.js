import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCampusThunk } from "../store/campusesReducer";

export const SingleCampus = () => {
    const dispatch = useDispatch();
    const params = useParams();
    // note to self: need to access state.studentsReducer.students
    // because the combineReducer in configureStore seems to store the state
    // in the individual reducer slice
    const campus = useSelector(state => state.campusesReducer.campus)

    React.useEffect(() => {
        dispatch(getCampusThunk(params.campusId));
    }, []);

    return (
        <div>
            { campus ?
                    <div key={campus.id}>
                        <img src={campus.imageUrl} alt={campus.imageUrl}/>
                        <h2>{campus.name}</h2>
                        <p>{campus.address}</p>
                        <p>{campus.description}</p>
                        <hr/>
                    </div>
                : 'Loading students...'
            }
        </div>
    )
}