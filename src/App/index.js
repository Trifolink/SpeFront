import logo from '../logo.svg';
import '../App.css';
import { myTasks } from '../Data/data';
import styles from "./App.module.css";
// import Task from '../Tasks/';
import TodoList from '../Tasks/Todolist';


function App() {

    const handleDoubleClick = (task) => {
    console.log(`Double clic sur la tâche : ${task.name}`);
  };

  return (
    <div className="App">
      <h1>Liste des tâches</h1>
      <h2 className={styles.title}>Sous titre</h2>

      <TodoList tasks={myTasks} onDoubleClick={handleDoubleClick} />


    </div>
  );
}

export default App;

      /* <ul>
        {myTasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul> */
