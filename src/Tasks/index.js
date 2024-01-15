import React from 'react';

export default function Task(props){
// console.log("props=",props)
    return(
        <li>{props.name}</li>
    )
}

// import React from 'react';

// export default function Task(props){
//     const Double = () => {
//         console.log(`Double clic sur la tâche : ${props.name}`);
//       };
//     return(
//         <li onDoubleClick={Double}>{props.name}</li>;
//     )
// }