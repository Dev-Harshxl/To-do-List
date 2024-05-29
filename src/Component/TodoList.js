import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, onRemoveTask, onToggleComplete }) {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem 
          key={index} 
          task={task} 
          index={index} 
          onRemoveTask={onRemoveTask} 
          onToggleComplete={onToggleComplete} 
        />
      ))}
    </ul>
  );
}

export default TodoList;
