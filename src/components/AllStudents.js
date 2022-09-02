import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearStudent, deleteStudentThunk, getAllStudentsThunk } from "../store/studentsReducer";
import { AddStudent } from "./AddStudent";

export const AllStudents = () => {
    const dispatch = useDispatch();
    const [studentList, setStudentList] = React.useState(useSelector(state => state.studentsReducer.students));
    const [sort, setSort] = React.useState('none');

    const handleOptions = event => {
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
                setStudentList(studentList);
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
                setStudentList(studentList);
                break;
            case 'gpa_up':
                studentList.sort((a, b) => a.gpa - b.gpa);
                setStudentList(studentList);
                break;
            case 'gpa_down':
                studentList.sort((a, b) => b.gpa - a.gpa);
                setStudentList(studentList);
                break;
        }
        setSort(event.target.value);
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