import React, { useState } from 'react'
import { Button } from "antd";


function TodoList() {
    const inputLength = 20;
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== '') {
            setTasks(t => [...t, newTask])
            setNewTask('');
        }
    }

    function deleteTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    }

    return (
        <>
            <div className='to-do-list'>
                <h1>ToDo List</h1>
                <div>
                    <input type="text" maxLength={inputLength} placeholder='Enter a task...' value={newTask} onChange={handleInputChange} />
                    <Button className='add-button' onClick={addTask} type="primary" >Add</Button>
                </div>
                <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <Button className='delete-button' onClick={() => deleteTask(index)} type="primary" danger>Delete</Button>
                    </li>
                )}
            </ol>
            </div>
        </>
    )
}
export default TodoList