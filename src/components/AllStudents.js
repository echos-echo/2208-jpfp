import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearStudent, deleteStudentThunk, getAllStudentsThunk } from "../store/studentsReducer";
import { AddStudent } from "./AddStudent";

export const AllStudents = () => {
    const dispatch = useDispatch();
    const [sort, setSort] = React.useState('none');
    const [search, setSearch] = React.useState('');

    const sortStudents = (studentArray, sortOption) => {
        switch (sortOption) {
            case 'LName_up':
                return [...studentArray].sort((a, b) => a.lastName < b.lastName ? 1 : a.lastName > b.lastName ? -1 : 0)
                .filter(student => student.firstName.toLowerCase().includes(search.toLowerCase()));
            case 'LName_down':
                return [...studentArray].sort((a, b) => a.lastName > b.lastName ? 1 : a.lastName < b.lastName ? -1 : 0)
                .filter(student => student.firstName.toLowerCase().includes(search.toLowerCase()));
            case 'gpa_up':
                return [...studentArray].sort((a, b) => a.gpa - b.gpa).filter(student => student.firstName.toLowerCase().includes(search.toLowerCase()));
            case 'gpa_down':
                return [...studentArray].sort((a, b) => b.gpa - a.gpa).filter(student => student.firstName.toLowerCase().includes(search.toLowerCase()));
            case 'none':
                return studentArray.filter(student => student.firstName.toLowerCase().includes(search.toLowerCase()));
        }
    }

    const studentList = sortStudents((useSelector(state => state.studentsReducer.students) || [] ), sort)

    const handleOptions = event => {
        setSort(event.target.value);
    }

    const handleChange = event => {
        setSearch(event.target.value);
    }

    React.useEffect(() => {
        dispatch(getAllStudentsThunk());
        dispatch(clearStudent());
    }, [sort]);

    return (
        <div className="all-students">
            <div className="column-list">
                <label htmlFor='filter-options'>Filter students by:</label>
                <select name='filter-options' onChange={handleOptions} defaultValue='none'>
                    <option value='LName_up'>Last Name - Ascending</option>
                    <option value='LName_down'>Last Name - Descending</option>
                    <option value='gpa_up'>GPA - Ascending</option>
                    <option value='gpa_down'>GPA - Descending</option>
                    <option value='none'>No sorting</option>
                </select>
                <input placeholder="Search for student by first name" value={search} onChange={handleChange}/>
                { studentList ?
                    studentList.map(student => 
                        <div key={student.id} className='divInListing'>
                            <button onClick={() => dispatch(deleteStudentThunk(student))} className='delete-button'>X</button>
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
            <AddStudent/>
        </div>
    )
}