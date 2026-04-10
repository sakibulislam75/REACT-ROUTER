import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Header1.css'
const Header = () => {
    return (
        <div>
            <h1 className='text-4xl text-purple-500 border-b-1
            '>Header</h1>
            <nav className='text-blue-400'>
                <NavLink className='mr-5' to='/'>Home</NavLink>
                <NavLink className='mr-5' to='/about'>About</NavLink>
                <NavLink className='mr-5' to='/mobile'>Mobile</NavLink>
            </nav>
        </div>
    );
};

export default Header;