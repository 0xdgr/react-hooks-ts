import { Todo, TodoState } from '../interfaces/todo';

type TodoAction =
    | { action: 'addTodo', payload: Todo }
    | { action: 'toggleTodo', payload: { id: string } };

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {

    switch (action.action) {
        case 'addTodo':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
            break;
        case 'toggleTodo':
            return {
                ...state,
                todos: state.todos.map(({...todo}) => {
                    if (todo.id === action.payload.id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }
            break;
        default:
            return state;

    }
}