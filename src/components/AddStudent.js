import React from "react";
import { useDispatch } from "react-redux";

export const AddStudent = () => {
    const dispatch = useDispatch();
    const [firstName, setFName] = React.useState('');
    const [lastName, setLName] = React.useState('');
    const [email, setEmail] = React.useState('');

    React.useEffect(() => {
    }, [firstName, lastName, email]);

    return (
        <div>
            <form onSubmit={() => null}>
                <label htmlFor='firstName'>First Name: </label>
                <input type='text' name='firstName' value={firstName} onChange={() => setFName(event.target.value)}/>
                <label htmlFor='lastName'>Last Name: </label>
                <input type='text' name='lastName' value={lastName} onChange={() => setLName(event.target.value)}/>
                <label htmlFor='email'>Address: </label>
                <input type='text' name='email' value={email} onChange={() => setEmail(event.target.value)}/>
                <button type='submit'>Add Student</button>
            </form>
        </div>
    )
}