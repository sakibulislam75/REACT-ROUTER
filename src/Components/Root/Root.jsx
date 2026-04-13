import React from 'react';
import Home from '../Home/Home';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Aside from '../Aside/Aside';
import Footer from '../Footer/Footer';

const Root = () => {
    const navigation=useNavigation();
    const isNavigating=Boolean(navigation.location);

    return (
        <div className='text-center text-3xl flex flex-col gap-5 items-center justify-center h-screen space-y-2'>
            <Header></Header>
          <div className='flex gap-5 items-center'>
            <Aside></Aside>
            {isNavigating && <p className='text-2xl text-green-500'>Loading...</p> }
              <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default Root;