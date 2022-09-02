import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCampus, deleteCampusThunk, getAllCampusesThunk } from "../store/campusesReducer";
import { AddCampus } from "./AddCampus";

export const AllCampuses = () => {
    const dispatch = useDispatch();
    const [sort, setSort] = React.useState('none');

    const sortCampuses = (campusArray, sortOption) => {
        console.log(sortOption)
        switch (sortOption) {
            case 'enrolled_up':
                return [...campusArray].sort((a, b) => 
                    a.students && b.students ? a.students.length - b.students.length : -1
                );
            case 'enrolled_down':
                return [...campusArray].sort((a, b) => 
                    a.students && b.students ? b.students.length - a.students.length : 1
                );
            case 'none':
                return campusArray;
        }
    };
    const campusList = sortCampuses(useSelector(state => state.campusesReducer.campuses || []), sort);

    const handleOptions = event => {
        setSort(event.target.value);
    }

    React.useEffect(() => {
        dispatch(getAllCampusesThunk());
        dispatch(clearCampus());
    }, [sort]);

    return (
        <div className="all-campuses">
            <AddCampus/>
            <div className="column-list">
                <label htmlFor='filter-options'>Filter campuses by:</label>
                <select name='filter-options' onChange={handleOptions} defaultValue='none'>
                    <option value='enrolled_up'>Number of Students - Ascending</option>
                    <option value='enrolled_down'>Number of Students - Descending</option>
                    <option value='none'>No sorting</option>
                </select>
                { campusList ?
                    campusList.map(campus => 
                        <div key={campus.id} className='divInListing'>
                            <button onClick={() => dispatch(deleteCampusThunk(campus))} className='delete-button'>X</button>
                            <Link to={`/campuses/${campus.id}`}>
                            <img src={campus.imageUrl} alt={campus.imageUrl}/>
                            <h2>{campus.name}</h2>
                            </Link>
                            <p>{campus.address}</p>
                            <p>{campus.description}</p>
                            <p><i>{campus.students ? `${campus.students.length} student(s) attend this campus` : '0 student(s) attend this campus'}</i></p>
                            <hr/>
                        </div>)
                    : 'Loading campuses...'
                }
            </div>
        </div>
    )
}