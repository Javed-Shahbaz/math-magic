import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Calculator from './components/Calculator';
import Quot from './components/Quotes';
import Home from './components/Home';
import Layout from './components/Layout';

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="calculator" element={<Calculator />}> </Route>
        <Route path="quote" element={<Quot />} />
      </Routes>
    </>
  );
}

export default App;