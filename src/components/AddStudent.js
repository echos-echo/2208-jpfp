import React from "react";
import { useDispatch } from "react-redux";
import { addStudentThunk } from "../store/studentsReducer";

export const AddStudent = () => {
    const dispatch = useDispatch();
    const [firstName, setFName] = React.useState('');
    const [lastName, setLName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleSubmit = event => {
        event.preventDefault();
        if (firstName.length < 1 || lastName.length < 1 || email.length < 1) {
            window.alert('Please fill in all required fields');
        } else {
            dispatch(addStudentThunk({firstName, lastName, email}));
    
            // clears the fields after a student is added
            setFName('');
            setLName('');
            setEmail('');
        }
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
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name: </label>
                <input type='text' name='firstName' value={firstName} onChange={handleChange('firstName')}/>
                <label htmlFor='lastName'>Last Name: </label>
                <input type='text' name='lastName' value={lastName} onChange={handleChange('lastName')}/>
                <label htmlFor='email'>Email: </label>
                <input type='text' name='email' value={email} onChange={handleChange('email')}/>
                <button type='submit'>Add Student</button>
            </form>
        </div>
    )
}