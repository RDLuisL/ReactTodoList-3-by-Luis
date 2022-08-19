import React, { Fragment, useState } from 'react';
import { TodoList } from "./component/todolist.jsx";

export function App() {
    const [todos,setTodos] = useState([]);
    const [input,setinput] = useState('');
    const handleTodoAdd = () => {
        setTodos ([{id:0,task:input,complete: false}, ...todos])

    }

	return (
        <Fragment>
            <TodoList todos={todos} />
            <input type="text" placeholder="Nueva Tarea" onChange={(evento)=> {
                setinput(evento.target.value)
            }}/>
            <button onClick={handleTodoAdd}
            
            
            >➕</button>
            <button>🗑️</button>
            
        </Fragment>

    
    )

}

