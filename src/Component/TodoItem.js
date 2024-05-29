import React from 'react';

function TodoItem({ task, index, onRemoveTask, onToggleComplete }) {
  return (
    <li className="todo-item">
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => onToggleComplete(index)} 
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => onRemoveTask(index)}>Remove</button>
    </li>
  );
}

export default TodoItem;
