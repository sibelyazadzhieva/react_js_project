const baseUrl = 'http://localhost:3030/data/recipes';

const getAccessToken = () => {
    const authJSON = localStorage.getItem('auth') || localStorage.getItem('user');
    if (!authJSON) return null;
    
    try {
        return JSON.parse(authJSON).accessToken;
    } catch (err) {
        return null;
    }
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

export const create = async (recipeData) => {
    const token = getAccessToken();
    
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(recipeData)
    });

    const result = await response.json();
    return result;
};

export const edit = async (recipeId, recipeData) => {
    const token = getAccessToken();

    const response = await fetch(`${baseUrl}/${recipeId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(recipeData)
    });

    const result = await response.json();
    return result;
};

export const remove = async (recipeId) => {
    const token = getAccessToken();

    const response = await fetch(`${baseUrl}/${recipeId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    });

    return response.json();
};

export const getOwn = async (userId) => {
    if (!userId) return [];
    const query = encodeURIComponent(`_ownerId="${userId}"`);
    
    const response = await fetch(`${baseUrl}?where=${query}`);
    
    if (!response.ok) {
        return [];
    }

    const result = await response.json();
    return Object.values(result);
};