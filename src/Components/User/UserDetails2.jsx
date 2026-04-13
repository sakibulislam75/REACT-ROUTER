import React, { use } from 'react';

const UserDetails2 = ({ data }) => {
    const data1=use(data);
    return (
        <div>
        <h1><small>Name : {data1.name}</small></h1>
        <h2><small>Email : {data1.email}</small></h2>
        <h3><small>Phone : {data1.phone}</small></h3>
        </div>
    );
};

export default UserDetails2;