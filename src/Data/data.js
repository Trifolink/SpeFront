let myTasks = [
    { id: 1, name: "Miata" },
    { id: 2, name: "Subaru" },
    { id: 3, name: "Supra" } 
];


export function addTask(newTaskName) {
    // Trouver l'id non utilisé
    const newId = myTasks.length > 0 ? Math.max(...myTasks.map(task => task.id)) + 1 : 1;
  
    // Créer la nouvelle tâche
    const newTask = {
      id: newId,
      name: newTaskName,
    };
  
    // Ajouter la nouvelle tâche au tableau des tâches
    myTasks.push(newTask);
  
    // Afficher le contenu du tableau dans la console
    console.log('Nouveau tableau des tâches :', myTasks);
  }

  export { myTasks };
