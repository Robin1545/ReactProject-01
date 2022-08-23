import Todo from "./Todo";
import style from './Todos.module.css';

export default function Todos (props) {

    function rmTodo (id) {
        props.rmTodos(id);
    }
    return (
        <section className={style.todos}>
            {props.todos.map((todo,index) => (<Todo key ={index} todo={todo} rmTodo={rmTodo} />))}
        </section>
    )
}
