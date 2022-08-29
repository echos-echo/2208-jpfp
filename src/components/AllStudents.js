import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudentsThunk } from "../store/studentsReducer";

export const AllStudents = () => {
    const dispatch = useDispatch();
    const studentList = useSelector(state => state.studentsReducer.students)

    React.useEffect(() => {
        dispatch(getAllStudentsThunk());
    }, []);

    return (
        <div>
            has students
        </div>
    )
}