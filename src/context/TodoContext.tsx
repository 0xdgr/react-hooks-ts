import { createContext } from 'react';
import { TodoState } from '../interfaces/todo';

type TodoContextProps = {
    todoState: TodoState,
    toggleTodo: (id: string) => void,
};

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);