import React from "react";



export function TodoItem(props) {
    const { id, task, completed } = props.todo
    return (
        <li>
            {task}
        </li>


    )
}