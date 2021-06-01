import {useSelector} from 'react-redux';
import Todo from './Todo';

const Todos = () => {
    const todos = useSelector(store => store.tasks);
    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} {...todo} />)}
        </div>
    );
};

export default Todos;