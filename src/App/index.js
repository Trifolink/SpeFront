import React from 'react';
import TodoList from '../Tasks/TodoList'; 
import { myTasks } from '../Data/data';
import styles from "./App.module.css";
import '../App.css';



function App() {
  const handleDoubleClick = (task) => {
    console.log(`Double clic sur la tâche : ${task.name}`);
  };

  return (
    <div className="App">
      <h1>Liste des tâches</h1>
      <h2 className={styles.title}>Sous titre</h2>

      <TodoList myTasks={myTasks} handleDoubleClick={handleDoubleClick} />
    </div>
  );
}

export default App;
