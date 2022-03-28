import { TodoProvider } from '../context/TodoProvider'
import { TodoList } from './TodoList';

export const Todo = () => {
    return (
        <section className="card mt-4 pt-4">
            <h2>Todo List:</h2>
            <TodoProvider>
                <TodoList/>
            </TodoProvider>
        </section>
    );
}