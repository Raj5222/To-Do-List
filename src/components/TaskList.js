// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onEdit }) {
  const taskCount = tasks.length;

  return (
    <div>
      {taskCount > 0 && (
        <div>
          <h2>To-Do List ({taskCount} {taskCount === 1 ? 'task' : 'tasks'})</h2>
        </div>
      )}
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
    </div>
  );
}

export default TaskList;
