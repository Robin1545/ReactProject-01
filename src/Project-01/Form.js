import { useState } from 'react';
import style from './Form.module.css';


export default function Form (props) {
    const [todo, setTodo] = useState({title : '', desc: ''});
    const {title,desc} = todo;


    const handleChange = (e) => {
        const name = e.target.name;
        setTodo((oldValue) => {
            return {...oldValue, [name]:e.target.value}
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        props.onGetTodo(todo);
        setTodo({title : '', desc :''});
    }


    return (
        <div>
            <div className={style.form}>
            <form  onSubmit={handleSubmit}>
                <table>
                    <tbody className ={style["form-field"]}>
                        <tr >
                            <td>
                                <label htmlFor='name'>Title </label>
                            </td>
                            <td>
                                <p className={style.pTag}>:</p>
                            </td>
                            <td>
                                <input type="text" id='title' name='title' onChange={handleChange} value={title}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='desc'>Desc </label>
                            </td>
                            <td>
                                <p className={style.pTag}>:</p>
                            </td>
                            <td>
                            <textarea name="desc" id="desc" cols="30" rows="3" onChange={handleChange} value={desc}></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div >
                <button>Add Todo</button>
                </div>
            </form>
            </div>
        </div>
    )
}