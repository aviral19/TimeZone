import React, {useState, useEffect} from 'react';
import './App.css';
import Task from './Components/Task/Task';
const App = () => {
  const taskList = [{
    "id": "1",
    "title": "Example Task 1",
    "description": "This is a sample task",
    "completed": false 
},
{
    "id": "2",
    "title": "Example Task 2",
    "description": "This is a sample task",
    "completed": false
}]
  const [zone, setZone] = useState([]);
  const [todo, setTodo] = useState(taskList);
  const [task, setTask] = useState({
    id: '',
    title: '',
    description: '',
    completed: '',
  });

  const onComplete = (id) => {
    setTodo(todo.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    }))
  }

  const onDelete = (id) => {
    setTodo(todo.filter(task => task.id !== id))
  }

  return (
    <>
      <Task task={todo[0]} 
      onComplete={onComplete} 
      onDelete={onDelete}/>
    </>
  );
}

export default App;
