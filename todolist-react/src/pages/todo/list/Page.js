import React, { useState } from "react";
import { Container } from "@mui/material";
import TodoGrid from '../../../components/todo/list/TodoGrid'


function Page() {

  return (
    <Container className="todo-container">
      <div className="row">
        <div className="col-md-6">
          <TodoGrid />
        </div>
        <div className="col-md-6">
          <TodoGrid />
        </div>
      </div>      
    </Container>
  );
}

export default Page;
