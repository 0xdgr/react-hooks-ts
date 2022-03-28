import { useTodos } from '../hooks/useTodos';
import { Todo } from '../interfaces/todo';

export const TodoItem = (props: { todo: Todo }) => {

    const {id, completed, desc} = props.todo;
    const {toggleTodo} = useTodos();

    return <li style={{
        cursor: 'pointer',
        textDecoration: completed ? 'line-through' : '',
    }}
               onDoubleClick={() => toggleTodo(id)}>
        {desc}
    </li>;
};