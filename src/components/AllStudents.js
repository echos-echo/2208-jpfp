import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudentsThunk } from "../store/studentsReducer";

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
            { studentList ?
                studentList.map(student => 
                    <div key={student.id}>
                        <img src={student.imageUrl} alt='image not found'/>
                        <h2>{student.firstName + ' ' + student.lastName}</h2>
                        <p>{student.email}</p>
                        <p>GPA: {student.gpa}</p>
                        <hr/>
                    </div>)
                : 'Loading students...'
            }
        </div>
    )
}