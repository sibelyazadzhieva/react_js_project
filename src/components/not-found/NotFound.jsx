import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="not-found-page">
            <div className="not-found-container">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>The page you are looking for doesn't exist. Go to <Link to="/">Home</Link>.</p>
                <Link to="/" className="btn-hero">Go Back Home</Link>
            </div>
        </section>
    );
}