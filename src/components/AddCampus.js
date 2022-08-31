import React from "react";
import { useDispatch } from "react-redux";

export const AddCampus = () => {
    const dispatch = useDispatch();
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');

    React.useEffect(() => {
    }, [name, address]);

    return (
        <div>
            <form onSubmit={() => null}>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' value={name} onChange={() => setName(event.target.value)}/>
                <label htmlFor='address'>Address: </label>
                <input type='text' name='address' value={address} onChange={() => setAddress(event.target.value)}/>
                <button type='submit'>Add Campus</button>
            </form>
        </div>
    )
}