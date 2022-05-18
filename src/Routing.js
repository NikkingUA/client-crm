import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Details from './Screen/Contact/Contact';
import Home from './Screen/Home/Home';
import Header from './Components/Layout/Header'

import { routes } from './routes/routes'


function Routing() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.MACHINE} element={<Home />} />
        <Route path={routes.PEZZI_DI_RICAMBIO} element={<Home />} />
        <Route path={routes.CONTACT} element={<Home />} />
        <Route path={routes.REGISTRATION} element={<Home />} />
        <Route path={routes.LOGIN} element={<Home />} />
      </Routes>
    </>
  );
}

export default Routing;
