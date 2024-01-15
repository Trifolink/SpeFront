import React from 'react';
import { myTasks } from '../Data/data';


const Task = ({ taskText }) => {
  return <li>{taskText}</li>;
};

export default Task;