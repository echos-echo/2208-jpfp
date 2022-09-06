import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllCampusesThunk } from "../store/campusesReducer";
import { getAllStudentsThunk, getOneStudentThunk, studentsReducer } from "../store/studentsReducer";
import { EditStudent } from "./EditStudent";

export const SingleStudent = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const student = useSelector(state => state.studentsReducer.student);
    const campuses = useSelector(state => state.campusesReducer.campuses);
    const students = useSelector(state => state.studentsReducer.students || []);
    const thisStudentsCampus = useSelector(state => state.studentsReducer.student ? state.studentsReducer.student.campusId : null);

    // .find() would cause an error on the first render, hence ternary
    // const thisStudentsCampus = (useSelector(state => state.campusesReducer.campuses) && student) ? campuses.find(campus => campus.id === student.campusId) : console.log('campus render');

    React.useEffect(() => {
        if (!isNaN(params.studentId)) {
            dispatch(getOneStudentThunk(params.studentId));
            // need to use allcampuses here too. accessing this page
            // does not guarantee that campuses is already in the store
            dispatch(getAllCampusesThunk());
        }
    }, []);

    return (
        <div>
            { 
            student && campuses ?
                    <div key={student.id} className='single-detail'>
                        <EditStudent student={student} campusId={thisStudentsCampus} campuses={campuses}/>
                        <div className="detailed-info">
                        <Link to={`/students/${student.id}`}>
                        <img src={student.imageUrl} alt={student.imageUrl}/>
                        <h2>{student.firstName + ' ' + student.lastName}</h2>
                        </Link>
                        <p>{student.email}</p>
                        <p>GPA: {student.gpa}</p>
                        <h3>Campus: {thisStudentsCampus ? <Link to={`/campuses/${thisStudentsCampus}`}>{campuses.find(campus => campus.id === parseInt(thisStudentsCampus)).name}</Link> : 'Currently not enrolled'}</h3>
                        <hr/>
                        </div>
                    </div>
                : students.findIndex(currStudent => currStudent.id === parseInt(params.studentId)) !== -1 ? 'Loading student...' : 'Student does not exist' 
            }
        </div>
    )
}