export default function Login() {
    return (
        <section className="auth-container">
            <div className="auth-card">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="peter@abv.bg" 
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                        />
                    </div>

                    <button type="submit" className="btn-submit">Login</button>
                    
                    <p className="auth-nav">
                        Don't have an account? <a href="/register">Register here</a>
                    </p>
                </form>
            </div>
        </section>
    );
}