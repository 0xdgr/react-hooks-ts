import { Counter } from "./components/Counter";
import { UserLogin } from './components/UserLogin';

import { TimerSet } from './components/TimerSet';
import { CounterRed } from './components/CounterRed';

function App() {
    return (
        <>
            <h1>Welcome to Typescript!</h1>
            <hr/>

            <h2>useState</h2>
            <Counter/>
            <UserLogin/>

            <h2>useEffect</h2>
            <TimerSet/>

            <h2>useReducer</h2>
            <CounterRed/>
        </>
    );
}

export default App;
