import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Calculator from './components/calculator';
import Quot from './components/Quotes';
import Home from './components/Home';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="Calculator" element={<Calculator />}> </Route>
        <Route path="Quotes" element={<Quot />} />
      </Routes>
    </>
  );
}
export default App;
