import React from 'react'
import { Header } from '../atom/layout/Header';
import { Outlet } from 'react-router-dom';

export const HeaderOnly = () => {

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
