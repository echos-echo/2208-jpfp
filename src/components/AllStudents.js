import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearStudent, deleteStudentThunk, getAllStudentsThunk } from "../store/studentsReducer";
import { AddStudent } from "./AddStudent";

export const AllStudents = () => {
    const dispatch = useDispatch();
    // note to self: need to access state.studentsReducer.students
    // because the combineReducer in configureStore seems to store the state
    // in the individual reducer slice
    const studentList = useSelector(state => state.studentsReducer.students);

    const handleOptions = event => {
        console.dir(event.target.value);
        switch (event.target.value) {
            case 'LName_up':
                studentList.sort((a, b) => {
                    if (a.lastName < b.lastName) {
                        return 1;
                    } else if (a.lastName > b.lastName) {
                        return -1;
                    } else {
                        return 0;
                    }
                });
                console.dir(studentList.map(student => student.lastName))
                break;
            case 'LName_down':
                studentList.sort((a, b) => {
                    if (a.lastName > b.lastName) {
                        return 1;
                    } else if (a.lastName < b.lastName) {
                        return -1;
                    } else {
                        return 0;
                    }
                });
                console.dir(studentList.map(student => student.lastName));
                break;
            case 'gpa_up':
                studentList.sort((a, b) => a.gpa - b.gpa);
                console.dir(studentList.map(student => student.gpa));
                break;
            case 'gpa_down':
                studentList.sort((a, b) => b.gpa - a.gpa);
                console.dir(studentList.map(student => student.gpa));
                break;
        }
    }

    React.useEffect(() => {
        dispatch(getAllStudentsThunk());
        dispatch(clearStudent());
    }, []);

    return (
        <div>
            <AddStudent/><hr/>
            <label htmlFor='filter-options'>Filter students by:</label>
            <select name='filter-options' onChange={handleOptions} defaultValue='none'>
                <option value='LName_up'>Last Name - Ascending</option>
                <option value='LName_down'>Last Name - Descending</option>
                <option value='gpa_up'>GPA - Ascending</option>
                <option value='gpa_down'>GPA - Descending</option>
            </select>
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