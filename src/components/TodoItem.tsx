import { Todo } from '../interfaces/todo';

export const TodoItem = (props: { todo: Todo }) => {
    const {completed, desc} = props.todo;

    return <li className={completed ? 'completed' : 'pending'}>
        {desc}
    </li>;
};