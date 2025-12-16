import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import * as recipeService from '../../services/recipeService';
import * as commentService from '../../services/commentService'; 
import AuthContext from '../../contexts/AuthContext';

export default function Details() {
    const navigate = useNavigate();
    const { recipeId } = useParams();
    const { userId, isAuthenticated, username } = useContext(AuthContext); 

    const [recipe, setRecipe] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState(''); 

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => setRecipe(result));

        commentService.getAll(recipeId)
            .then(result => setComments(result));
    }, [recipeId]);

    const isOwner = userId === recipe._ownerId;

    const deleteHandler = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this recipe?");
        if (confirmDelete) {
            try {
                await recipeService.remove(recipeId);
                navigate('/catalog');
            } catch (err) {
                console.log(err);
            }
        }
    };


    const addCommentHandler = async (e) => {
        e.preventDefault();

        if(newComment.trim() === '') return; 
        try {
            const result = await commentService.create(recipeId, newComment);

            result.author = { email: username }; 
            
            setComments(state => [...state, result]);
            setNewComment(''); 
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <section id="details-page">
            <div className="details-wrapper">
                <div className="details-img">
                    <img src={recipe.imageUrl} alt={recipe.title} />
                </div>
                
                <div className="details-info">
                    <h1>{recipe.title}</h1>
                    <h3>Ingredients:</h3>
                    <p>{recipe.ingredients}</p>
                    
                    <h3>Preparation Steps:</h3>
                    <p className="prep-text">{recipe.instructions}</p>
                </div>

                {isOwner && (
                    <div className="buttons">
                        <Link to={`/catalog/${recipeId}/edit`} className="btn-edit">Edit</Link>
                        <button className="btn-delete" onClick={deleteHandler}>Delete</button>
                    </div>
                )}

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(c => (
                            <li key={c._id} className="comment">
                                <p><strong>{c.author.email || c.author.username}:</strong> {c.text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments yet.</p>
                    )}
                </div>

                {isAuthenticated && (
                    <article className="create-comment">
                        <label>Add new comment:</label>
                        <form className="form" onSubmit={addCommentHandler}>
                            <textarea 
                                name="comment" 
                                placeholder="Comment......"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                            ></textarea>
                            <input className="btn submit" type="submit" value="Add Comment" />
                        </form>
                    </article>
                )}
            </div>
        </section>
    );
}