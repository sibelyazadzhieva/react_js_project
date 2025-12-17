import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as recipeService from '../../services/recipeService';

export default function CreateRecipe() {
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});
    
    const [values, setValues] = useState({
        title: '',
        imageUrl: '',
        ingredients: '',
        instructions: ''
    });

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (values.title.length < 3) {
            newErrors.title = 'Title should be at least 3 characters long!';
        }

        if (!values.imageUrl.startsWith('http')) {
            newErrors.imageUrl = 'Image URL should start with http:// or https://!';
        }

        if (values.ingredients.length < 3) {
            newErrors.ingredients = 'Ingredients should be at least 3 characters long!';
        }

        if (values.instructions.length < 10) {
            newErrors.instructions = 'Preparation steps should be at least 10 characters long!';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const isValid = validate();

        if (!isValid) {
            return;
        }

        try {
            await recipeService.create(values);
            navigate('/catalog');
        } catch (err) {
            console.log(err);
        }
    };

    const onFocus = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: '' 
        }));
    }

    return (
        <section id="create-page"> 
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create Recipe</h1>
                    
                    <div className="input-group">
                        <label htmlFor="title">Recipe Title:</label>
                        <input 
                            type="text" 
                            id="title" 
                            name="title" 
                            placeholder="Beef Wellington"
                            value={values.title}
                            onChange={onChange}
                            onFocus={onFocus}
                            style={errors.title ? { borderColor: 'red' } : {}}
                        />
                        {errors.title && (
                            <p className="field-error">{errors.title}</p>
                        )}
                    </div>

                    <div className="input-group">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input 
                            type="text" 
                            id="imageUrl" 
                            name="imageUrl" 
                            placeholder="https://..." 
                            value={values.imageUrl}
                            onChange={onChange}
                            onFocus={onFocus}
                            style={errors.imageUrl ? { borderColor: 'red' } : {}}
                        />
                        {errors.imageUrl && (
                            <p className="field-error">{errors.imageUrl}</p>
                        )}
                    </div>

                    <div className="input-group">
                        <label htmlFor="ingredients">Ingredients:</label>
                        <input 
                            type="text" 
                            id="ingredients" 
                            name="ingredients" 
                            placeholder="Beef, pastry, mushrooms..." 
                            value={values.ingredients}
                            onChange={onChange}
                            onFocus={onFocus}
                            style={errors.ingredients ? { borderColor: 'red' } : {}}
                        />
                        {errors.ingredients && (
                            <p className="field-error">{errors.ingredients}</p>
                        )}
                    </div>

                    <div className="input-group">
                        <label htmlFor="instructions">Preparation:</label>
                        <textarea 
                            name="instructions" 
                            id="instructions" 
                            placeholder="Enter preparation steps..."
                            value={values.instructions}
                            onChange={onChange}
                            onFocus={onFocus}
                            style={{
                                width: '100%', 
                                height: '100px', 
                                padding: '10px',
                                borderRadius: '6px',
                                border: errors.instructions ? '1px solid red' : '1px solid #ddd',
                                marginBottom: errors.instructions ? '5px' : '20px'
                            }}
                        ></textarea>
                        {errors.instructions && (
                            <p className="field-error">{errors.instructions}</p>
                        )}
                    </div>

                    <input type="submit" className="btn submit" value="Create Recipe" />
                </div>
            </form>
        </section>
    );
}