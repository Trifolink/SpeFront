import React, { useState } from 'react';


// export default function Task(props){
// // console.log("props=",props)
//     return(
//         <li>{props.name}</li>
//     )
// }

export default function Task({ name, onDoubleClick }) {
    const [counter, setCounter] = useState(true);
  
    const handleClick = () => {
        setCounter(!counter);
    };
  
    const taskStyle = {
      textDecoration: counter ? 'none' : 'line-through'
    };
  
    return (
      <li onClick={handleClick} onDoubleClick={onDoubleClick} style={taskStyle}>
        {name}
      </li>
    )
};

