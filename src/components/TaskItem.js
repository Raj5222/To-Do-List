// src/components/TaskItem.js
import React, { useState } from 'react';

function TaskItem({ task, index, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.taskName);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEditChange = (e) => {
    if (e.target.name === "taskName") {
      setEditedTask(e.target.value);
    } else if (e.target.name === "description") {
      setEditedDescription(e.target.value);
    }
  };

  const handleEditSave = () => {
    onEdit(index, {taskName: editedTask, description: editedDescription});
    setIsEditing(false);
  };

  return (
    <li>
      <span>{index + 1}. </span>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={handleEditChange}
            name="taskName"
          />
          <textarea
            value={editedDescription}
            onChange={handleEditChange}
            name="description"
          ></textarea>
        </>
      ) : (
        <>
          <div>
            <strong>{task.taskName}</strong>
          </div>
          <div>{task.description}</div>
        </>
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
