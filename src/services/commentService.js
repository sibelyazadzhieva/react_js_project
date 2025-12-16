const baseUrl = 'http://localhost:3030/data/comments';

export const create = async (recipeId, text) => {
    const token = localStorage.getItem('accessToken'); 
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ recipeId, text })
    });

    const result = await response.json();
    return result;
};

export const getAll = async (recipeId) => {
    const query = new URLSearchParams({
        where: `recipeId="${recipeId}"`,
        load: `author=_ownerId:users`
    });

    const response = await fetch(`${baseUrl}?${query}`);
    const result = await response.json();
    return result;
};