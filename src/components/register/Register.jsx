import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    
    const [values, setValues] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const criteria = {
        length: values.password.length >= 6,
        upper: /[A-Z]/.test(values.password),
        lower: /[a-z]/.test(values.password),
        number: /\d/.test(values.password),
        symbol: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(values.password),
    };

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));

        setErrors(state => ({ ...state, [e.target.name]: '' }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (!values.email) {
            validationErrors.email = "Email is required!";
        } else if (!values.email.includes('@')) {
            validationErrors.email = "Email must contain '@' symbol!";
        }

        if (!criteria.length) {
            validationErrors.password = "Password must be at least 6 characters long!";
        } else if (!criteria.upper) {
            validationErrors.password = "Password must contain at least one Uppercase letter!";
        } else if (!criteria.lower) {
            validationErrors.password = "Password must contain at least one Lowercase letter!";
        } else if (!criteria.number) {
            validationErrors.password = "Password must contain at least one Digit (0-9)!";
        } else if (!criteria.symbol) {
            validationErrors.password = "Password must contain at least one Special symbol (!@#$%)!";
        }

        if (values.password !== values.confirmPassword) {
            validationErrors.confirmPassword = "Passwords do not match!";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        registerSubmitHandler(values);
    };

    return (
        <section id="register-page">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="maria@email.com"
                        onChange={onChange}
                        value={values.email}
                        style={errors.email ? { borderColor: 'red' } : {}}
                    />
                    {errors.email && <p className="field-error">{errors.email}</p>}

                    <label htmlFor="pass">Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="register-password"
                        onChange={onChange}
                        value={values.password}
                        style={errors.password ? { borderColor: 'red' } : {}}
                    />

                    {errors.password && (
                        <div style={{marginTop: '-15px', marginBottom: '10px'}}>
                            
                            <p className="field-error" style={{marginBottom: '5px'}}>
                                {errors.password}
                            </p>

                            <ul className="password-help" style={{marginTop: '0'}}>
                                <li>Password requirements:</li>
                                <li>- At least 6 characters</li>
                                <li>- Uppercase & lowercase letters</li>
                                <li>- At least one digit (0-9)</li>
                                <li>- Special symbol (!@#$%)</li>
                            </ul>
                        </div>
                    )}

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        id="confirm-password"
                        onChange={onChange}
                        value={values.confirmPassword}
                        style={errors.confirmPassword ? { borderColor: 'red' } : {}}
                    />
                    {errors.confirmPassword && <p className="field-error">{errors.confirmPassword}</p>}

                    <input type="submit" className="btn submit" value="Register" />
                </div>
            </form>
        </section>
    );
}