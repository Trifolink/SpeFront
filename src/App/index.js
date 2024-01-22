import logo from '../logo.svg';
import '../App.css';
import { myTasks } from '../Data/data';
import styles from "./App.module.css";
import Task from '../Tasks/';

function App() {

    const handleDoubleClick = (task) => {
    console.log(`Double clic sur la tâche : ${task.name}`);
  };

  return (
    <div className="App">
      <h1>Liste des tâches</h1>
      <h2 className={styles.title}>Sous titre</h2>
      {/* <ul>
        {myTasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul> */}



    <ul>
      {myTasks.map(x => (
        <Task key={x.id} {...x} onDoubleClick={() => handleDoubleClick(x)} />
      ))}
    </ul>

    </div>
  );
}

export default App;
