import { TodoProvider } from '../context/TodoProvider'

export const Todo = () => {
    return (
        <section className="card mt-4 pt-4">
            <h2>Todo List:</h2>
            <TodoProvider>
                <ul>
                    <li>todo item</li>
                </ul>
            </TodoProvider>
        </section>
    )
        ;
}