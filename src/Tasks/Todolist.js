import React from 'react';
import Task from './Tasks/Task';

export default function TodoList({ tasks, onDoubleClick }) {
  return (
    <ul>
    {myTasks.map(x => (
      <Task key={x.id} {...x} onDoubleClick={() => onDoubleClick(x)} />
    ))}
  </ul>
  );
}
