import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearStudent, deleteStudentThunk, getAllStudentsThunk } from "../store/studentsReducer";
import { AddStudent } from "./AddStudent";

export const AllStudents = () => {
    const dispatch = useDispatch();
    const [sort, setSort] = React.useState('none');

    const sortStudents = (studentArray, sortOption) => {
        switch (sortOption) {
            case 'LName_up':
                return [...studentArray].sort((a, b) => {
                    if (a.lastName < b.lastName) {
                        return 1;
                    } else if (a.lastName > b.lastName) {
                        return -1;
                    } else {
                        return 0;
                    }
                });
                // return studentArray
            case 'LName_down':
                return [...studentArray].sort((a, b) => {
                    if (a.lastName > b.lastName) {
                        return 1;
                    } else if (a.lastName < b.lastName) {
                        return -1;
                    } else {
                        return 0;
                    }
                });
                // return studentArray
            case 'gpa_up':
                return [...studentArray].sort((a, b) => a.gpa - b.gpa);
                // return studentArray;
            case 'gpa_down':
                return [...studentArray].sort((a, b) => b.gpa - a.gpa);
                // return studentArray;
            case 'none':
                return studentArray;
        }
    }

    const studentList = sortStudents((useSelector(state => state.studentsReducer.students) || [] ), sort)

    const handleOptions = event => {
        sortStudents(studentList, event.target.value);
        setSort(event.target.value);
    }

    React.useEffect(() => {
        dispatch(getAllStudentsThunk());
        dispatch(clearStudent());
    }, [sort]);

    return (
        <div>
            <AddStudent/><hr/>
            <label htmlFor='filter-options'>Filter students by:</label>
            <select name='filter-options' onChange={handleOptions} defaultValue='none'>
                <option value='LName_up'>Last Name - Ascending</option>
                <option value='LName_down'>Last Name - Descending</option>
                <option value='gpa_up'>GPA - Ascending</option>
                <option value='gpa_down'>GPA - Descending</option>
                <option value='none'>No sorting</option>
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