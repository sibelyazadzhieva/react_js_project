import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as recipeService from '../../services/recipeService';

export default function Create() {
    const navigate = useNavigate();

    const [recipe, setRecipe] = useState({
        title: '',
        imageUrl: '',
        ingredients: '',
        instructions: ''
    });

    const onChange = (e) => {
        setRecipe(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

   const onSubmit = async (e) => {
        e.preventDefault();

        const recipeData = Object.fromEntries(new FormData(e.target));

        if (recipeData.title.length < 3) {
            return alert("Заглавието трябва да е поне 3 символа!");
        }
        if (recipeData.ingredients.length < 3) {
            return alert("Съставките трябва да са поне 3 символа!");
        }
        if (recipeData.instructions.length < 10) {
            return alert("Описанието трябва да е поне 10 символа!");
        }

        try {
            await recipeService.create(recipeData);
            navigate('/catalog');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section id="create-page">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create Recipe</h1>

                    <label htmlFor="title">Recipe Title:</label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        placeholder="Musaka" 
                        value={recipe.title} 
                        onChange={onChange} 
                    />

                    <label htmlFor="imageUrl">Image URL:</label>
                    <input 
                        type="text" 
                        id="imageUrl" 
                        name="imageUrl" 
                        placeholder="http://..." 
                        value={recipe.imageUrl} 
                        onChange={onChange} 
                    />

                    <label htmlFor="ingredients">Ingredients:</label>
                    <input 
                        type="text" 
                        id="ingredients" 
                        name="ingredients" 
                        placeholder="Potatoes, Meat, ..." 
                        value={recipe.ingredients} 
                        onChange={onChange} 
                    />

                    <label htmlFor="instructions">Preparation:</label>
                    <textarea 
                        name="instructions" 
                        id="instructions" 
                        placeholder="Step 1: Peel the potatoes..."
                        value={recipe.instructions}
                        onChange={onChange}
                        style={{
                            width: '100%', 
                            height: '100px', 
                            marginBottom: '20px', 
                            padding: '10px',
                            borderRadius: '6px',
                            border: '1px solid #ddd'
                        }}
                    ></textarea>

                    <input type="submit" className="btn submit" value="Create Recipe" />
                </div>
            </form>
        </section>
    );
}