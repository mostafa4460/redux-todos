import {useDispatch} from 'react-redux';

const Todo = ({id, task}) => {
    const dispatch = useDispatch();
    const removeTodo = () => dispatch({ type: "REMOVE_TASK", payload: id });
    return (
        <div>
            <p>{task}</p>
            <button onClick={removeTodo}>X</button>
        </div>
    );
};

export default Todo;