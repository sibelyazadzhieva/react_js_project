import { useEffect, useState } from 'react';
import * as recipeService from '../../services/recipeService';
import { Link } from 'react-router-dom';

export default function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        recipeService.getAll()
            .then(result => {
                setRecipes(result);
            })
            .catch(err => {
                console.log("Error fetching recipes:", err);
            });
    }, []);
    
    const filteredRecipes = recipes.filter(recipe => 
        recipe.title && recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section id="catalog-page">
            <h1>All Recipes</h1>

            <div className="search-wrapper">
                <input 
                    type="text" 
                    placeholder="Search for recipes..." 
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="list-container">
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map(recipe => (
                        <div key={recipe._id} className="card">
                            <div className="card-img">
                                <img src={recipe.imageUrl} alt={recipe.title} />
                            </div>
                            <div className="card-info">
                                <h2>{recipe.title}</h2>
                                <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                                <Link to={`/catalog/${recipe._id}`} className="details-btn">Details</Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <h3 className="no-articles">
                        {recipes.length === 0 ? "No recipes yet" : "No recipes found"}
                    </h3>
                )}
            </div>
        </section>
    );
}