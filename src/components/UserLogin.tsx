import { useState } from 'react';

interface User {
    uid: string,
    name: string
}

export const UserLogin = () => {

    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            uid: '1234',
            name: '0xdgr',
        })
    };

    return (
        <div className="mt-5">
            <h3>User Login</h3>
            <button
                onClick={login}
                className="btn btn-outline-primary mt-2">
                Login
            </button>

            {
                (!user) ?
                <p>Login to see the user</p> :
                <pre>{JSON.stringify(user)}</pre>
            }
        </div>
    );
}