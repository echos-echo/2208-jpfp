import React from "react";
import { useDispatch } from "react-redux";
import { addCampusThunk } from '../store/campusesReducer';

export const AddCampus = () => {
    const dispatch = useDispatch();
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addCampusThunk({name, address}));

        // clears the fields after a campus is added
        setName('');
        setAddress('');
    }

    const handleChange = prop => event => {
        switch (prop) {
            case 'name':
                setName(event.target.value);
                break;
            case 'address':
                setAddress(event.target.value);
                break;
        }
    }

    React.useEffect(() => {
    }, [name, address]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' value={name} onChange={handleChange('name')}/>
                <label htmlFor='address'>Address: </label>
                <input type='text' name='address' value={address} onChange={handleChange('address')}/>
                <button type='submit'>Add Campus</button>
            </form>
        </div>
    )
}