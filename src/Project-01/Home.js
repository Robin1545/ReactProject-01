import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form';
import style from './Home.module.css';
import Todos from "./Todos";

function Home () {
    const [todos,setTodo] = useState([]);

    function getTodo(newTodo) {
        setTodo([...todos,  {id : uuidv4() ,newTodo}]);
        
    }
    function rmTodos (id) {
        setTodo((oldTodos)=>{
            const filteringTodos = oldTodos.filter((todo) => todo.id !== id);
            return filteringTodos;
        });
    }
    return (
        <div className={style.container}>
            <h1>Todo App</h1>
            <Form onGetTodo={getTodo}/>
            <Todos todos = {todos} rmTodos={rmTodos}/>
        </div>
    )
}; 



export default Home;