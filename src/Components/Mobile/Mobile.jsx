import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Users from './Users';

const Mobile = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                data.map(user=><Users key={user.id} user={user}></Users>)
            }
        </div>
    );
};

export default Mobile;