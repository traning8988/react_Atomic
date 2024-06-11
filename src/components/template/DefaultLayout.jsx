import React from 'react';
import { Header } from '../atom/layout/Header';
import { Footer } from '../atom/layout/Footer';
import { Outlet } from 'react-router-dom';

export const DefaultLayout = () => {
  
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
