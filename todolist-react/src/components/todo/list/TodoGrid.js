import React, { useState } from "react";
import { Card, CardContent, Typography, IconButton, TextField, Button, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import MenuIcon from "@mui/icons-material/Menu";

import '../../../styles/gridStyles.css';

function TodoGrid() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Styleguide creation", completed: false },
    { id: 2, text: "Send wireframes", completed: true },
    { id: 3, text: "Readability About page", completed: false },
    { id: 4, text: "Check color contrast", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
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
            <ListItem key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
              <ListItemIcon onClick={() => toggleTask(task.id)} className="icon">
                {task.completed ? <RadioButtonCheckedIcon color="secondary" /> : <RadioButtonUncheckedIcon color="disabled" />}
              </ListItemIcon>
              <ListItemText primary={task.text} className={task.completed ? "text-completed" : ""} />
              {task.completed && (
                <IconButton onClick={() => removeTask(task.id)} className="delete-icon">
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
