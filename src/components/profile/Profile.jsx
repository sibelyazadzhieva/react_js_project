import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import * as recipeService from '../../services/recipeService';
import AuthContext from '../../contexts/AuthContext';

export default function Profile() {
    const { userId, email } = useContext(AuthContext); 
    const [ownRecipes, setOwnRecipes] = useState([]);

    useEffect(() => {
        if (userId) {
            recipeService.getOwn(userId)
                .then(result => {
                    setOwnRecipes(result);
                })
                .catch(err => console.log(err));
        }
    }, [userId]);

    return (
        <section id="profile-page">
            <div className="profile-info">
                <div className="profile-img">
                    <img src="https://cdn-icons-png.flaticon.com/128/6723/6723955.png" alt="profile" />
                </div>
                <div className="profile-details">
                    <h1>User Profile</h1>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Created Recipes:</strong> {ownRecipes.length}</p>
                </div>
            </div>

            <div className="profile-recipes">
                <h2>My Recipes</h2>
                
                {ownRecipes.length > 0 ? (
                    <div className="recipes-grid">
                        {ownRecipes.map(recipe => (
                            <div key={recipe._id} className="recipe-card">
                                <img src={recipe.imageUrl} alt={recipe.title} />
                                <h3>{recipe.title}</h3>
                                <Link to={`/catalog/${recipe._id}`} className="btn-details">Details</Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h3 className="no-recipes">You haven't created any recipes yet.</h3>
                )}
            </div>
        </section>
    );
}