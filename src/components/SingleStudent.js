import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllCampusesThunk } from "../store/campusesReducer";
import { getOneStudentThunk } from "../store/studentsReducer";

export const SingleStudent = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const student = useSelector(state => state.studentsReducer.student)
    const campuses = useSelector(state => state.campusesReducer.campuses);

    // .find() would cause an error on the first render, hence ternary
    const thisStudentsCampus = (campuses && student) ? campuses.find(campus => campus.id === student.campusId) : null;

    console.dir(student);
    console.dir(thisStudentsCampus);

    React.useEffect(() => {
        dispatch(getOneStudentThunk(params.studentId));
        // need to use allcampuses here too. accessing this page
        // does not guarantee that campuses is already in the store
        dispatch(getAllCampusesThunk());
    }, []);

    return (
        <div>
            { student ?
                    <div key={student.id}>
                        <Link to={`/students/${student.id}`}>
                        <img src={student.imageUrl} alt={student.imageUrl}/>
                        <h2>{student.firstName + ' ' + student.lastName}</h2>
                        </Link>
                        <p>{student.email}</p>
                        <p>GPA: {student.gpa}</p>
                        <h3>Campus: {thisStudentsCampus ? <Link to={`/campuses/${thisStudentsCampus.id}`}>{thisStudentsCampus.name}</Link> : 'Currently not enrolled'}</h3>
                        <hr/>
                    </div>
                : 'Loading student...'
            }
        </div>
    )
}