import { Counter } from "./components/Counter";
import { UserLogin } from './components/UserLogin';

import { TimerSet } from './components/TimerSet';

function App() {
    return (
        <>
            <h1>Welcome to Typescript!</h1>
            <hr/>

            <h2>useState</h2>
            <Counter/>
            <UserLogin/>

            <h2>useEffect + useRef</h2>
            <TimerSet/>
        </>
    );
}

export default App;
