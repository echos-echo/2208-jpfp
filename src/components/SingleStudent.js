import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneStudentThunk } from "../store/studentsReducer";

export const SingleStudent = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const student = useSelector(state => state.studentsReducer.student)

    React.useEffect(() => {
        dispatch(getOneStudentThunk(params.studentId));
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
                        <hr/>
                    </div>
                : 'Loading student...'
            }
        </div>
    )
}