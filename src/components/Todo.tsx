import { TodoProvider } from '../context/TodoProvider'
import { TodoList } from './TodoList';
import { TodoTitle } from './TodoTitle';

export const Todo = () => {
    return (
        <section className="card mt-4 pt-4">
            <TodoProvider>
                <TodoTitle/>
                <TodoList/>
            </TodoProvider>
        </section>
    );
}