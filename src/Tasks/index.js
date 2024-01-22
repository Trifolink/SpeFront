import React from 'react';

// export default function Task(props){
// // console.log("props=",props)
//     return(
//         <li>{props.name}</li>
//     )
// }

export default function Task({ name, onDoubleClick }) {

    
    return (
      <li onDoubleClick={onDoubleClick}>
        {name}
      </li>
    );
  }