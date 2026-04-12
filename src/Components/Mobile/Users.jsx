import React from 'react';
import { Link } from 'react-router-dom';

const Users = ({user}) => {
    return (
        <div className=' border border-amber-400 text-xl p-2 rounded-lg'>
            <h2>Name : {user.name}</h2>
            <p>Email : {user.email}</p>
            <p>Phone : {user.phone}</p>
            <Link to={`/Mobile/${user.id}`} className='text-blue-500'>Show Details</Link>
        </div>
    );
};

export default Users;