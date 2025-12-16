import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        loginSubmitHandler(values);
    };

    return (
        <section id="login-page">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Login</h1>
                    
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="peter@gmail.com" 
                        onChange={onChange}
                        value={values.email}
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input 
                        type="password" 
                        id="login-pass" 
                        name="password" 
                        onChange={onChange}
                        value={values.password}
                    />

                    <input type="submit" className="btn submit" value="Login" />
                </div>
            </form>
        </section>
    );
}