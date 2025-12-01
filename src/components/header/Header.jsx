import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <div className="logo">
                    <Link to="/">🍳 TastyRecipes</Link>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/recipes">Recipes</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>

                </ul>
            </nav>
        </header>
    );
}