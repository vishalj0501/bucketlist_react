import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
//import { uuid } from 'uuidv4';
 //import uuid from 'uuid/package.json'

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  function handleTaskInputChange(e) {
    
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); 
    if (todo.task.trim()) {
      addTodo({ ...todo, id:uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Task"
        type="text"
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">Enter</Button>
    </form>
  );
}

export default TodoForm;