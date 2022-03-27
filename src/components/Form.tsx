import { useForm } from '../hooks/useForm';

interface FormData {
    email: string,
    username: string,
    age: number
}

export const Form = () => {

    const {email, username, age, handleChange} = useForm<FormData>({
        email: '',
        username: '',
        age: 18
    });

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email" className="form-control" name="email"
                       value={email}
                       onChange={handleChange}/>
            </div>

            <div className="mb-3">
                <label className="form-label">Name:</label>
                <input type="text" className="form-control" name="username"
                       value={username}
                       onChange={handleChange}/>

            </div>

            <pre>Name: {username}, Email: {email}</pre>
        </form>
    );
}

