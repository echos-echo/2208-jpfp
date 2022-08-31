import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudentThunk, getAllStudentsThunk } from "../store/studentsReducer";
import { AddStudent } from "./AddStudent";

export const AllStudents = () => {
    const dispatch = useDispatch();
    // note to self: need to access state.studentsReducer.students
    // because the combineReducer in configureStore seems to store the state
    // in the individual reducer slice
    const studentList = useSelector(state => state.studentsReducer.students)

    React.useEffect(() => {
        dispatch(getAllStudentsThunk());
    }, []);

    return (
        <div>
            <AddStudent/><hr/>
            { studentList ?
                studentList.map(student => 
                    <div key={student.id}>
                        <button onClick={() => dispatch(deleteStudentThunk(student))}>X</button>
                        <Link to={`/students/${student.id}`}>
                        <img src={student.imageUrl} alt={student.imageUrl}/>
                        <h2>{student.firstName + ' ' + student.lastName}</h2>
                        </Link>
                        <p>{student.email}</p>
                        <p>GPA: {student.gpa}</p>
                        <hr/>
                    </div>)
                : 'Loading students...'
            }
        </div>
    )
}