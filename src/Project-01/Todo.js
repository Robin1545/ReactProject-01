import style from './Todo.module.css';

export default function Todo (props) {
    const {id,newTodo} = props.todo;
    const {title,desc} = newTodo;
    const handleBtn = (id) => {
        props.rmTodo(id)
    }
    return (
        <article className={style.todo}>
            <div className={style.parent}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div>
                <button className={style.btn} onClick = {()=> {
                    handleBtn(id)
                }}>
                    <i className ="fa fa-trash fa-2x"></i>
                </button>
            </div>
        </article>
    )
}