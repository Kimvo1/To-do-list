import React from "react";
import Checkbox from "./Checkbox";

const TaskList = ({ tasks, onDeleteTask, onChangeCompleted }) => {
return (
    <ul>
    {tasks.map((task, index) => (
        <li   key={index}>
            <Checkbox isChecked={task.checked} onChange = {() => onChangeCompleted(index)} />
            <p className={task.checked?"text-checked":""}>{task.task}</p>
            <button onClick={() => onDeleteTask(index)}>Delete</button>
        </li>
    ))}
    </ul>
    
);
};

export default TaskList;
