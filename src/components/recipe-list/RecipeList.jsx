export default function RecipeList() {
    return (
        <section className="catalog-page">
            <h1>All Recipes</h1>
            
            <div className="recipe-list">
                
                <div className="recipe-card">
                    <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" alt="Spaghetti" />
                    <div className="card-info">
                        <h3>Spaghetti Carbonara</h3>
                        <p>Classic Italian pasta with eggs, cheese, and bacon.</p>
                        <a href="/recipes/1" className="btn-details">Details</a>
                    </div>
                </div>

                <div className="recipe-card">
                     <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" alt="Pancakes" />
                    <div className="card-info">
                        <h3>Fluffy Pancakes</h3>
                        <p>The best breakfast for Sunday mornings.</p>
                        <a href="/recipes/2" className="btn-details">Details</a>
                    </div>
                </div>
                
            </div>
        </section>
    );
}