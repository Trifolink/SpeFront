import logo from '../logo.svg';
import '../App.css';
import { myTasks } from '../Data/data';
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <h1>Liste des tâches</h1>
      <h2 className='title'>Sous titre</h2>
      {/* <ul>
        {myTasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul> */}

      <ul>
        {myTasks.map(x => (
          <li>{x.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
