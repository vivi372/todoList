import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Page';
import Login from '../pages/member/login/Page';
import Find from '../pages/member/find/Page';
import UpdatePw from '../pages/member/updatePw/Page';
import TodoList from '../pages/todo/list/Page';

const TodoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* /member 경로 아래 중첩 라우팅 */}
      <Route path="member">
          <Route path="login" element={<Login />} />  {/* /member/login */}          
          <Route path="find" element={<Find />} />  {/* /member/find */}  
          <Route path="updatePw" element={<UpdatePw />} />  {/* /member/updatePw */}  
      </Route>
      <Route path="todo">
          <Route path="list" element={<TodoList />} />  {/* /member/login */}          

      </Route>

    </Routes>
  );
};

export default TodoRoutes;
