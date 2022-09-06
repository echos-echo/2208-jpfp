import React from "react";
import { useDispatch } from "react-redux";
import { updateStudentThunk } from "../store/studentsReducer";

export const EditStudent = props => {
    const dispatch = useDispatch();
    const [firstName, setFName] = React.useState(props.student.firstName);
    const [lastName, setLName] = React.useState(props.student.lastName);
    const [email, setEmail] = React.useState(props.student.email);
    const [campusId, setCampus] = React.useState(props.campusId);

    const handleSubmit = event => {
        event.preventDefault();
        isNaN(campusId) ? dispatch(updateStudentThunk({firstName, lastName, email, id: props.student.id, campusId: null}))
            : dispatch(updateStudentThunk({firstName, lastName, email, id: props.student.id, campusId}));
    }

    const handleChange = prop => event => {
        switch (prop) {
            case 'firstName':
                setFName(event.target.value);
                break;
            case 'lastName':
                setLName(event.target.value);
                break;
            case 'email':
                setEmail(event.target.value);
                break;
            case 'campus':
                setCampus(event.target.value);
        }
    }

    React.useEffect(() => {
    }, [firstName, lastName, email, campusId]);

    return (
        <div className="edit-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name: </label>
                <input type='text' name='firstName' value={firstName} onChange={handleChange('firstName')}/>
                <label htmlFor='lastName'>Last Name: </label>
                <input type='text' name='lastName' value={lastName} onChange={handleChange('lastName')}/>
                <label htmlFor='email'>Email: </label>
                <input type='email' name='email' value={email} onChange={handleChange('email')}/>
                <label htmlFor='campus'>Select a campus:</label>
                <select name='campus' defaultValue={campusId ? campusId : undefined} onChange={handleChange('campus')}>
                    <option value={undefined}>Not enrolled</option>
                    {props.campuses ? props.campuses.map(campus => <option value={campus.id} key={campus.id}>{campus.name}</option>) : null}
                </select>
                <button type='submit'>Update Student Information</button>
            </form>
        </div>
    )
}