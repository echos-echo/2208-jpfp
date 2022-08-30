import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCampusThunk } from "../store/campusesReducer";

export const SingleCampus = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const campus = useSelector(state => state.campusesReducer.campus)

    React.useEffect(() => {
        dispatch(getCampusThunk(params.campusId));
    }, []);
    console.dir(campus);
    return (
        <div>
            { campus ?
                <div key={campus.id}>
                    <img src={campus.imageUrl} alt={campus.imageUrl}/>
                    <h2>{campus.name}</h2>
                    <p>{campus.address}</p>
                    <p>{campus.description}</p>
                    <h3>Students Currently Enrolled:</h3>
                    {campus.students.length > 0 ? 
                        <ul>
                            {campus.students.map(student => 
                            <li key={student.id}>{student.firstName + ' ' + student.lastName}</li>)}
                        </ul> 
                        : 'This campus currently has no students enrolled.' }
                    <hr/>
                </div>
                : 'Loading campus information...'
            }
        </div>
    )
}