import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Aside from '../Aside/Aside';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='text-center text-3xl flex flex-col gap-5 items-center justify-center h-screen space-y-2'>
           <Header></Header>
          <div className='flex gap-5 items-center'>
            <Aside></Aside>
              <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default Root;