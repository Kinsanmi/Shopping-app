import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '../Components/Common/Header/Header';
import { Home } from '../Pages/Home';

export const Routers = () => {
  return (
    <>
    <Router>
        <Header />
        <Routes>
            <Route path='/home' element={ <Home />} />
        </Routes>
    </Router>
    </>
  )
}
