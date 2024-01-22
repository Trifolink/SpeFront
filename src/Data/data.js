let myTasks = [
    { id: 1, name: "Miata" },
    { id: 2, name: "Subaru" },
    { id: 3, name: "Supra" } 
];


export function addTask(newTaskName) {
    const newId = myTasks.length > 0 ? Math.max(...myTasks.map(task => task.id)) + 1 : 1;
  
    const newTask = {
      id: newId,
      name: newTaskName,
    };
  
    myTasks.push(newTask);
  
    console.log('Nouveau tableau des tâches :', myTasks);
  }

  export { myTasks };
