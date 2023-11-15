// src/components/FormTodo.js
import React, { useState} from 'react';

const FormTodo = ({ onAddTask}) => {
const [task, setTask] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    if (task){
        onAddTask(task)
        setTask('');
    }
};

return(
    <form onSubmit={handleSubmit}>
        <input className='placeholder'
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
    </form>
);
};

export default FormTodo;
