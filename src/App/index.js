import React, { useState } from 'react';
import TodoList from '../TodoList'; 
import { myTasks, addTask } from '../Data/data';
import styles from "./App.module.css";
import '../App.css';



function App() {
  const handleDoubleClick = (task) => {
    console.log(`Double clic sur la tâche : ${task.name}`);
  };

  
  const [name,setName] = useState("");

  function handleChange(event){
  setName(event.target.value);
  }
  
  function handleSubmit(event){
  event.preventDefault(); 
  alert(`t'as ecrit ca  : ${name}`);
  addTask(name);

  }
  

  return (
    <div className="App">
      <h1>Liste des tâches</h1>
      <h2 className={styles.title}>Sous titre</h2>

      <TodoList myTasks={myTasks} handleDoubleClick={handleDoubleClick} /* on charge l'info du double clique*//> 


      <form onSubmit={handleSubmit}>
    <label htmlFor="name">met tin texte lo</label>
    <input type="input" onChange={handleChange} value={name}/>
    <button type="submit">OK</button>
    </form>
      
    </div>
  );
}



export default App;
