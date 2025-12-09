export default function Register() {
    return (
        <section className="auth-container">
            <div className="auth-card">
                <h2>Register</h2>
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

                    <div className="form-group">
                        <label htmlFor="re-password">Repeat Password:</label>
                        <input 
                            type="password" 
                            id="re-password" 
                            name="re-password" 
                        />
                    </div>

                    <button type="submit" className="btn-submit">Register</button>
                    
                    <p className="auth-nav">
                        Already have an account? <a href="/login">Login here</a>
                    </p>
                </form>
            </div>
        </section>
    );
}