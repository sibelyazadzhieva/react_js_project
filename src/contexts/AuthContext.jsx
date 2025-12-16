import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [auth, setAuth] = useState(() => {
        const persistedAuth = localStorage.getItem('auth');
        
        if (persistedAuth) {
            try {
                return JSON.parse(persistedAuth);
            } catch (err) {
                return {};
            }
        }
        
        return {};
    });

    const loginSubmitHandler = async (values) => {
        try {
            const result = await authService.login(values.email, values.password);

            setAuth(result);
            
            localStorage.setItem('auth', JSON.stringify(result));
            localStorage.setItem('accessToken', result.accessToken);

            navigate('/'); 
        } catch (error) {
            console.log("Login error: " + error.message);
            alert("Грешен имейл или парола!"); 
        }
    };

   const registerSubmitHandler = async (values) => {        
        try {
            const result = await authService.register(values.email, values.password);

            setAuth(result);
            localStorage.setItem('auth', JSON.stringify(result));
            localStorage.setItem('accessToken', result.accessToken);

            navigate('/');
        } catch (error) {
            console.log("Register error: " + error.message);
            alert(error.message); 
        }
    };
    const logoutHandler = () => {
        setAuth({});
        
        localStorage.removeItem('auth');
        localStorage.removeItem('accessToken');
        
        navigate('/');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.email || auth.username,
        email: auth.email,
        userId: auth._id, 
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;