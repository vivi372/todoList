import React, { useState,useEffect } from "react";
import { Card, CardContent, Typography, IconButton, TextField, Button, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import {Menu,Add,Remove} from "@mui/icons-material";
import {todoList,todoTogle,todoDelete} from '../../../api/todo/todoApi';
import {getSession} from '../../../utils/session';
import '../../../styles/gridStyles.css';

function TodoGrid() {
  const [tasks, setTasks] = useState([
    { seqNo: 1, todoName: "Styleguide creation", compleYn: 'Y', impor: 1 },
    { seqNo: 2, todoName: "Send wireframes", compleYn: 'N', impor : 2 },    
  ]);
  const [id, setId] = useState("");
  const [showInput, setShowInput] = useState(false); // 입력창 표시 여부
  const [newTask, setNewTask] = useState(""); // 새로운 할 일 입력값

  //투두리스트 세팅하는 함수
  const setTodoList = async (id)=>{
    const result = await todoList(id);
    setTasks(result);
  }

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
        //console.log(id);
        setTodoList(id);
    }
  }, [id]);

  const toggleTask = async (seqNo,compleYn) => {
    await todoTogle(seqNo,compleYn);
    setTodoList(id);
  };

  const removeTask = async (seqNo) => {
    await todoDelete(seqNo);
    setTodoList(id);
  };

  const showInputToggle = () => {
    setShowInput(!showInput);
  }

  return ( 
    <Card className={`todo-card ${showInput ? "expanded" : ""}`}>
      <div className="todo-header">
        <IconButton>
          <Menu style={{ color: "white" }} />
        </IconButton>
        <Typography variant="h6" className="todo-title">Website todo</Typography>
      </div>
      <CardContent className="todo-list">
        <List className="row">
          {tasks.map((task) => ( 
            <ListItem key={task.id} className={`task-item ${task.compleYn === 'Y' ? "completed" : ""} ${showInput ? "col-md-6" : "col-md-12"}`}>
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
          {/* 오른쪽에서 확장되는 입력 폼 */}
          <div className={`task-input-container ${showInput ? "col-md-6 show" : ""}`}>
            <TextField
              className="task-input"
              variant="outlined"
              placeholder="새로운 할 일 추가..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
          </div>
        </List>
      </CardContent>

      {/* 추가 버튼 */}
      <button className="add-task-button" onClick={showInputToggle}>
        {!showInput? <Add/> : <Remove/>}
      </button>

    </Card>

  );
}

export default TodoGrid;
