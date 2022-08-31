import React from "react";
import { useDispatch } from "react-redux";
import { addStudentThunk } from "../store/studentsReducer";

export const AddStudent = () => {
    const dispatch = useDispatch();
    const [firstName, setFName] = React.useState('');
    const [lastName, setLName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleSubmit = event => {
        console.log('submitting data...')
        event.preventDefault();
        dispatch(addStudentThunk({firstName, lastName, email}));
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
        }
    }

    React.useEffect(() => {
    }, [firstName, lastName, email]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name: </label>
                <input type='text' name='firstName' value={firstName} onChange={handleChange('firstName')}/>
                <label htmlFor='lastName'>Last Name: </label>
                <input type='text' name='lastName' value={lastName} onChange={handleChange('lastName')}/>
                <label htmlFor='email'>Address: </label>
                <input type='text' name='email' value={email} onChange={handleChange('email')}/>
                <button type='submit'>Add Student</button>
            </form>
        </div>
    )
}