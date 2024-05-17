// src/components/AddTask.js
import React, { useState } from 'react';

function AddTask({ onAdd }) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      onAdd({ taskName, description });
      setTaskName('');
      setDescription('');
    }
  };

  return (
    <div><li>
      <input
        type="text"
        value={taskName}
        onChange={handleTaskNameChange}
        placeholder="Enter a new task name"
      />
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Enter task description"
      ></textarea></li>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
