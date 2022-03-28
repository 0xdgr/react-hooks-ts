import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { Todo } from '../interfaces/todo';

export const TodoItem = (props: { todo: Todo }) => {

    const {id, completed, desc} = props.todo;
    const {toggleTodo} = useContext(TodoContext);

    const handleDblClick = () => {
        toggleTodo(id);
    }

    return <li style={{
        cursor: 'pointer',
        textDecoration: completed ? 'line-through' : '',
    }}
               onDoubleClick={handleDblClick}>
        {desc}
    </li>;
};