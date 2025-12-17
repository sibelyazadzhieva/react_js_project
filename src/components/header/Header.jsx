import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

export default function Header() {
    const { isAuthenticated, email } = useContext(AuthContext);

    return (
        <header>
            <nav>
                <Link to="/" className="logo">
                <img src="https://cdn-icons-png.flaticon.com/128/14261/14261193.png" alt="logo" />
                    <span>Flavorite</span>
                </Link>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/catalog">All Recipes</Link></li>

                    {isAuthenticated ? (
                        <div id="user">
                            <Link to="/create">Create Recipe</Link>
                            <Link to="/profile">Profile</Link>
                            
                            <span className="user-greeting">Welcome, {email}</span>
                            
                            <Link to="/logout" className="btn-logout">Logout</Link>
                        </div>
                    ) : (
                        <div id="guest">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    )}
                </ul>
            </nav>
        </header>
    );
}