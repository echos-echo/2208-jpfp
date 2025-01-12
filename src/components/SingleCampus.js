import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllCampusesThunk, getCampusThunk, removeStudent } from "../store/campusesReducer";
import { removeFromCampusThunk } from "../store/studentsReducer";
import { EditCampus } from "./EditCampus";

export const SingleCampus = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const campus = useSelector(state => state.campusesReducer.campus);
    const campuses = useSelector(state => state.campusesReducer.campuses || []);

    const handleUnregister = student => {
        dispatch(removeFromCampusThunk({campusId: null, id: student.id}));
        dispatch(removeStudent(student));
    }

    React.useEffect(() => {
        if (!isNaN(params.campusId)) {
            dispatch(getCampusThunk(params.campusId));
            dispatch(getAllCampusesThunk());
        }
    }, []);

    return (
        <div>
            { campus ?
                <div key={campus.id} className='single-detail'>
                    <EditCampus campus={campus}/>
                    <div className="detailed-info">
                        <img src={campus.imageUrl} alt={campus.imageUrl}/>
                        <h2>{campus.name}</h2>
                        <p><i>{campus.address}</i></p>
                        <p>{campus.description}</p>
                        <h3>Students Currently Enrolled:</h3>
                        {console.log('rendering...')}
                        {campus.students.length > 0 ? 
                            <ul>
                                {campus.students.map(student => 
                                <li key={student.id}>
                                    <Link to={`/students/${student.id}`}>
                                        {student.firstName + ' ' + student.lastName}
                                    </Link>
                                    <button onClick={() => handleUnregister(student) }>Unregister {student.firstName} {student.lastName}</button>
                                </li>)}
                            </ul> 
                            : 'This campus currently has no students enrolled.' }
                        <hr/>
                    </div>
                </div>
                : campuses.findIndex(currCampus => currCampus.id === parseInt(params.campusId)) !== -1 ? 'Loading campus information...': 'Campus does not exist' 
            }
        </div>
    )
}