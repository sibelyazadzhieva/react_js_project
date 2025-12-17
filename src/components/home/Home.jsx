import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as recipeService from '../../services/recipeService';

export default function Home() {
    const [latestRecipes, setLatestRecipes] = useState([]);

    useEffect(() => {
        recipeService.getAll()
            .then(result => {
                const lastThree = result.slice(-3).reverse();
                setLatestRecipes(lastThree);
            })
            .catch(err => console.log("Error fetching recipes:", err));
    }, []);

    return (
        <section id="home-page" className="home">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to Flavorite!</h1>
                    <p className="hero-subtitle">Discover & Share the best recipes from around the world.</p>
                    <Link to="/catalog" className="btn-hero">Browse All Recipes</Link>
                </div>
            </div>

            <div className="latest-recipes">
                <h2>Freshly Added Recipes</h2>
                
                {latestRecipes.length > 0 ? (
                    <div className="latest-grid">
                        {latestRecipes.map(recipe => (
                            <div key={recipe._id} className="latest-card">
                                <div className="card-img-wrapper">
                                    <img src={recipe.imageUrl} alt={recipe.title} />
                                </div>
                                <div className="card-info">
                                    <h3>{recipe.title}</h3>
                                    <div className="btn-wrapper">
                                        <Link to={`/catalog/${recipe._id}`} className="btn-details">Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="no-data">No recipes found. Be the first to create one!</p>
                )}
            </div>
            
            <div className="features-section">
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path><line x1="6" y1="17" x2="18" y2="17"></line></svg>
                    </div>
                    <h3>Cook</h3>
                    <p>Access thousands of easy-to-follow instructions for any dish you can imagine.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                    </div>
                    <h3>Share</h3>
                    <p>Show your culinary masterpieces to the world and build your own following.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </div>
                    <h3>Enjoy</h3>
                    <p>Save your favorite meals, create collections, and enjoy good food with friends.</p>
                </div>
            </div>
        </section>
    );
}