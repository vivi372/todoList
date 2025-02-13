import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Page';
import Login from '../pages/member/login/Page'


const TodoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* /member 경로 아래 중첩 라우팅 */}
      <Route path="member">
          <Route path="login" element={<Login />} />  {/* /member/login */}          
      </Route>

    </Routes>
  );
};

export default TodoRoutes;
