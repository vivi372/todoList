import React, { useState,useEffect } from "react";
import { Card, CardContent, Typography, IconButton, TextField, Button, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import MenuIcon from "@mui/icons-material/Menu";
import {todoList,todoTogle,todoDelete} from '../../../api/todo/todoApi';
import {getSession} from '../../../utils/session';
import '../../../styles/gridStyles.css';

function TodoGrid() {
  const [tasks, setTasks] = useState([
    { seqNo: 1, todoName: "Styleguide creation", compleYn: 'Y', impor: 1 },
    { seqNo: 2, todoName: "Send wireframes", compleYn: 'N', impor : 2 },    
  ]);
  const [id, setId] = useState("");

  //컴포넌트 렌더링시 투두 리스트 가져오기
  //맨 처음에만 실행
 useEffect(()=>{
    //아이디 가져오기
    const user = getSession();
    console.log(user.id);
    setId(user.id);
  },[]);

  useEffect(() => {
    // id가 변경된 후 task 가져오기
    if (id !== "") {
        console.log(id);
        setTasks(todoList(id));
    }
  }, [id]);


  const toggleTask = (seqNo,compleYn) => {
    todoTogle(seqNo,compleYn);
    //setTasks(todoList(id));
  };

  const removeTask = (seqNo) => {
    todoDelete(seqNo);
    //setTasks(todoList(id));
  };

  return ( 
    <Card className="todo-card">
      <div className="todo-header">
        <IconButton>
          <MenuIcon style={{ color: "white" }} />
        </IconButton>
        <Typography variant="h6" className="todo-title">Website todo</Typography>
      </div>
      <CardContent className="todo-list">
        <List>
          {tasks.map((task) => ( 
            <ListItem key={task.id} className={`task-item ${task.compleYn === 'Y' ? "completed" : ""}`}>
              <ListItemIcon onClick={() => toggleTask(task.seqNo,task.compleYn)} className="icon">
                {task.compleYn === 'Y' ? <RadioButtonCheckedIcon color="secondary" /> : <RadioButtonUncheckedIcon color="disabled" />}
              </ListItemIcon>
              <ListItemText primary={task.todoName} className={task.compleYn === 'Y' ? "text-completed" : ""} />
              {task.compleYn === 'Y' && (
                <IconButton onClick={() => removeTask(task.seqNo)} className="delete-icon">
                  <DeleteIcon color="disabled" />
                </IconButton>
              )}
            </ListItem>
          ))}
        </List>
      </CardContent>


    </Card>

  );
}

export default TodoGrid;
