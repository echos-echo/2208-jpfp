import React from "react";
import { useDispatch } from "react-redux";
import { addCampusThunk, updateCampusThunk } from '../store/campusesReducer';

export const EditCampus = props => {
    const dispatch = useDispatch();
    const [name, setName] = React.useState(props.campus.name);
    const [address, setAddress] = React.useState(props.campus.address);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(updateCampusThunk({name, address, id: props.campus.id}));

        // clears the fields after a campus is updated
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
                <button type='submit'>Update Campus Information</button>
            </form>
        </div>
    )
}