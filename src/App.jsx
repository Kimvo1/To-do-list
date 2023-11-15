///src/App.js
import React, { useState } from 'react';
import Container from './components/Container';
import FormTodo from './components/FormTodo';
import TaskList from './components/TaskList';

function App(){
  const [tasks, setTasks] =useState([])
  const addTask = (task) =>{
    setTasks([
      ...tasks,
      {
        checked: false, task
      }]);
  };
  
  const onChangeCompleted = (index) =>{
    const toggleChecked = tasks.map((task, idx)=>idx === index?{...task, checked: !task.checked }:task)
    setTasks(toggleChecked)
  }

  const deleteTask =(index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return(
    <div>
      <Container>
      <h1>To-Do List</h1>
      <FormTodo onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onChangeCompleted = {onChangeCompleted} />

      </Container>
    </div>

  );
}
export default App;




