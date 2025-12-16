const baseUrl = 'http://localhost:3030/data/recipes';

export const create = async (recipeData) => {
    const token = localStorage.getItem('accessToken');

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token, 
        },
        body: JSON.stringify(recipeData)
    });

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
};

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    return Object.values(result); 
};

export const getOne = async (recipeId) => {
    const response = await fetch(`${baseUrl}/${recipeId}`);
    const result = await response.json();
    return result;
};

export const remove = async (recipeId) => {
    const token = localStorage.getItem('accessToken');

    const response = await fetch(`${baseUrl}/${recipeId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    });

    const result = await response.json();
    return result;
};

export const update = async (recipeId, recipeData) => {
    const token = localStorage.getItem('accessToken');

    const response = await fetch(`${baseUrl}/${recipeId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(recipeData)
    });

    const result = await response.json();
    return result;
};