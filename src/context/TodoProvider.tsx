import { useReducer } from 'react';
import { TodoState } from '../interfaces/todo';
import { TodoContext } from './TodoContext';
import { todoReducer } from './todoReducer';

interface TodoProviderProps {
    children: JSX.Element
};

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Buy Jones',
            completed: false
        },
        {
            id: '2',
            desc: 'LP Jones tokens',
            completed: false
        },
    ],
    completed: 0,
    pending: 2
};

export const TodoProvider = ({children}: TodoProviderProps) => {

    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    const toggleTodo = (id: string) => {
        dispatch({action: 'toggleTodo', payload: {id}});
    };

    return (
        <TodoContext.Provider value={{todoState: todoState, toggleTodo: toggleTodo}}>
            {children}
        </TodoContext.Provider>
    );
};