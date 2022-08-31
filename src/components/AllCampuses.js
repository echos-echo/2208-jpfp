import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCampusesThunk } from "../store/campusesReducer";
import { AddCampus } from "./AddCampus";

export const AllCampuses = () => {
    const dispatch = useDispatch();
    // note about useSelector made; please refer to the comment
    // made in AllStudents.js
    const campusList = useSelector(state => state.campusesReducer.campuses)

    React.useEffect(() => {
        dispatch(getAllCampusesThunk());
    }, []);

    return (
        <div>
            <AddCampus/><hr/>
            { campusList ?
                campusList.map(campus => 
                    <div key={campus.id}>
                        <button onClick={() => {}}>X</button>
                        <Link to={`/campuses/${campus.id}`}>
                        <img src={campus.imageUrl} alt={campus.imageUrl}/>
                        <h2>{campus.name}</h2>
                        </Link>
                        <p>{campus.address}</p>
                        <p>{campus.description}</p>
                        <hr/>
                    </div>)
                : 'Loading campuses...'
            }
        </div>
    )
}