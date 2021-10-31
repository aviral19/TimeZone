import React from "react";
import Checkbox from '@mui/material/Checkbox';

const Task = ({ task, onDelete, onComplete }) => {
  return (
      <>
        <Checkbox
          checked={task.completed}
          onChange={() => onComplete(task.id)}
        />
        <span>{task.title}</span>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </>
  );
};

export default Task;