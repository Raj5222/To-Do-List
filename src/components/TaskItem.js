// src/components/TaskItem.js
import React, { useState } from 'react';

function TaskItem({ task, index, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEditChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleEditSave = () => {
    onEdit(index, editedTask);
    setIsEditing(false);
  };

  return (
    <li>
      <span>{index + 1}. </span>
      {isEditing ? (
        <input
          type="text"
          value={editedTask}
          onChange={handleEditChange}
        />
      ) : (
        <span>{task}</span>
      )}
      <div className="task-actions">
        {isEditing ? (
          <button onClick={handleEditSave}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
}

export default TaskItem;
