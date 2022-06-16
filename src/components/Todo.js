import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
  
  function CheckboxClick() {
    toggleComplete(todo.id);
  }

  function RemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox checked={todo.completed} onClick={CheckboxClick} />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={RemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

export default Todo;