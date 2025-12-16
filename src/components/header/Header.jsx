import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';


export default function Header() {
    const { isAuthenticated, username } = useContext(AuthContext);

    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/catalog">All Recipes</Link> 
                <Link to="/" className="logo">Flavorite</Link>
                
                {isAuthenticated && (
                    <div id="user">
                        <Link to="/create">Create Recipe</Link>
                        <Link to="/logout">Logout</Link>
                        <span>Welcome, {username}</span>
                    </div>
                )}

                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}