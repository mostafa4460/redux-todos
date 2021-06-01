import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {v4 as uuid} from 'uuid';

const NewTodoForm = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const handleChange = e => setInput(e.target.value);
    const addTodo = e => {
        e.preventDefault();
        dispatch({ type: "ADD_TASK", payload: {id: uuid(), task: input} });
        setInput("");
    };

    return (
        <form onSubmit={addTodo}>
            <input
                type="text"
                placeholder="Add your todos"
                value={input}
                onChange={handleChange} />
            <button type="submit">+</button>
        </form>
    );
}

export default NewTodoForm;