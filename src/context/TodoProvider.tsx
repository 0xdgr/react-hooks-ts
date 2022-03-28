import { TodoContext } from './TodoContext';

interface TodoProviderProps {
    children: JSX.Element
};

export const TodoProvider = ({children}: TodoProviderProps) => {
    return (
        <TodoContext.Provider value={{}}>
            {children}
        </TodoContext.Provider>
    );
}