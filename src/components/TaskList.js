// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onEdit }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          index={index}
          task={task}
          onDelete={() => onDelete(index)}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default TaskList;
