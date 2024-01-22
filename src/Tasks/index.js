import React, { useState } from 'react';

// export default function Task(props){
// // console.log("props=",props)
//     return(
//         <li>{props.name}</li>
//     )
// }

export default function Task({ name, onDoubleClick }) {
    const [isActive, setIsActive] = useState(true);
  
    const handleClick = () => {
      setIsActive(!isActive);
    };
  
    const taskStyle = {
      textDecoration: isActive ? 'none' : 'line-through'
    };
  
    return (
      <li onClick={handleClick} onDoubleClick={onDoubleClick} style={taskStyle}>
        {name}
      </li>
    )
};