import { useTodos } from '../hooks/useTodos'

export const TodoTitle = () => {
    const {pendingTodos} = useTodos();

    return (
        <>
            <h2>Todo list</h2>
            <span className="mb-4">Pending: {pendingTodos} </span>
        </>
    );
}