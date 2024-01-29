import React, { useState } from 'react';

export default function Task({ name, onDoubleClick, isBlocked }) {
  const [counter, setCounter] = useState(true);

  const handleClick = () => {
    if (!isBlocked) {
      setCounter(!counter);
      onDoubleClick();  // Appel de la fonction onDoubleClick uniquement si la tâche n'est pas bloquée
    }
  };

  const taskStyle = {
    textDecoration: counter ? 'none' : 'line-through'
  };

  return (
    <li onClick={handleClick} onDoubleClick={onDoubleClick} style={taskStyle}>
      {name}
    </li>
  );
}
