import React, { useState } from 'react'

function ToDoItem(props){
    const [text,setText] = useState(false);

    function handleChange(event){
        setText(true);
    }
    return <div onClick={handleChange}> 
    <li style={{textDecoration: text? "line-through" : "none" }}>
        {props.text}
    </li>
     </div>
}

export default ToDoItem;