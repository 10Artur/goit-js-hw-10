const API_KEY =
    'live_bvPUqrWOT8Z9DgXgZnTWdVdqe3sWFdgkS0hBkbyUTOm1BSAUnuZhETMnPiGDcgr1';

function fetchBreeds() {
    const url = `https://api.thecatapi.com/v1/breeds/`;
    return fetch(url, {
        headers: {
            'x-api-key': API_KEY,
        },
    }).then(response => {
        return response.json();
    });
}

function fetchCatByBreed(breedId) {
    return fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
    ).then(response => response.json());
}

export default { fetchBreeds, fetchCatByBreed };