import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Page';


const TodoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default TodoRoutes;
