import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Top } from '../components/page/Top'
import { Users } from '../components/page/ Users'
import { DefaultLayout } from '../components/template/DefaultLayout'
import { HeaderOnly } from '../components/template/HeaderOnly'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Top />}/>
        </Route>
        <Route element={<HeaderOnly />}>
          <Route path='users' element={<Users />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
