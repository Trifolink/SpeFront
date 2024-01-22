import React from 'react';
import Task from './index';  
import { myTasks } from '../Data/data'; 

export default function TodoList({ handleDoubleClick }) {
  return (
    <ul>
      {myTasks.map(x => (
        <Task key={x.id} {...x} onDoubleClick={() => handleDoubleClick(x)} />
      ))}
    </ul>
  );
}

