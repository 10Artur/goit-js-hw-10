const API_KEY =
    'live_bvPUqrWOT8Z9DgXgZnTWdVdqe3sWFdgkS0hBkbyUTOm1BSAUnuZhETMnPiGDcgr1';

export function fetchBreeds() {
    const url = `https://api.thecatapi.com/v1/breeds/`;
    return fetch(url, {
        headers: {
            'x-api-key': API_KEY,
        },
    }).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
}

export function fetchCatByBreed(breedId) {
    return fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
    ).then(response => response.json());
}