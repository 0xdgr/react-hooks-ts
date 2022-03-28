import { Counter } from './components/Counter';
import { UserLogin } from './components/UserLogin';
import { TimerSet } from './components/TimerSet';
import { CounterRed } from './components/CounterRed';
import { Form } from './components/Form';
import { Todo } from './components/Todo';

function App() {
    return (
        <>
            <h1>Welcome to Typescript!</h1>
            <hr/>

            <h2>useState</h2>
            <Counter/>
            <UserLogin/>
            <hr/>

            <h2>useEffect</h2>
            <TimerSet/>
            <hr/>


            <h2>useReducer</h2>
            <CounterRed/>
            <hr/>

            <h2>customHooks</h2>
            <Form/>
            <hr/>

            <h2>useContext</h2>
            <Todo/>
        </>
    );
}

export default App;
