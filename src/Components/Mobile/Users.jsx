import React, { Suspense, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserDetails2 from '../User/UserDetails2';

const Users = ({ user }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/Mobile/${user.id}`);
    };
    const [showInfo, setShowInfo] = useState(false);
    const data = fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`).then(res => res.json());

    return (
        <div className=' border border-amber-400 text-sm p-2 rounded-lg'>
            <h2>Name : {user.name}</h2>
            <p>Email : {user.email}</p>
            <p>Phone : {user.phone}</p>
            <Link to={`/Mobile/${user.id}`} className='text-blue-500 mx-1'>Show Details</Link>
            {/* way with router link */}
            <button className='btn  py-1 px-3' onClick={handleNavigate}>
                ID : {user.id}
            </button>

            {/* way without router link */}
            <button className='btn' onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? 'Hide' : 'Show'} Info
            </button>
            {
                showInfo && <Suspense fallback={<p>Loading...</p>}>
                    <UserDetails2 data={data}></UserDetails2>
                </Suspense>
            }
        </div>
    );
};

export default Users;