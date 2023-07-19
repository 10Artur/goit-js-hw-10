import axios from 'axios';
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';
// import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
// import * as catApi from './cat-api.js';

const API_KEY =
    'live_bvPUqrWOT8Z9DgXgZnTWdVdqe3sWFdgkS0hBkbyUTOm1BSAUnuZhETMnPiGDcgr1';

axios.defaults.headers.common['x-api-key'] = API_KEY;

const selectElement = document.querySelector('.breed-select');
const selectContainer = document.querySelector('.breed-select-container'); // додано
const loaderElement = document.querySelector('.loader');
const errorElement = document.querySelector('.error');
const catInfoElement = document.querySelector('.cat-info');

function populateBreeds(breeds) {
    selectElement.innerHTML = breeds
        .map(breed => {
            return `<option value="${breed.id}">${breed.name}</option>`;
        })
        .join('');
}

function showLoader() {
    loaderElement.style.display = 'block';
}

function hideLoader() {
    loaderElement.style.display = 'none';
}

function showError() {
    errorElement.style.display = 'block';
}

function hideError() {
    errorElement.style.display = 'none';
}

function showCatInfo(catInfo) {
    catInfoElement.innerHTML = `
      <img src="${catInfo.url}" alt="Cat Image" />
      <p>Breed: ${catInfo.breed}</p>
      <p>Description: ${catInfo.description}</p>
      <p>Temperament: ${catInfo.temperament}</p>
    `;
    catInfoElement.style.display = 'block';
}

function hideCatInfo() {
    catInfoElement.style.display = 'none';
}

import { fetchBreeds } from './cat-api.js';
// async function fetchBreeds() {
//     try {
//         const response = await axios.get('https://api.thecatapi.com/v1/breeds');
//         const breeds = response.data;
//         populateBreeds(breeds);
//         selectContainer.style.display = 'block';
//     } catch (error) {
//         console.error(error);
//         showError();
//     } finally {
//         hideLoader();
//     }
// }

import { fetchCatByBreed } from './cat-api.js';
// async function fetchCatByBreed(breedId) {
//     try {
//         const response = await axios.get(
//             `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
//         );
//         const catInfo = {
//             url: response.data[0].url,
//             breed: response.data[0].breeds[0].name,
//             description: response.data[0].breeds[0].description,
//             temperament: response.data[0].breeds[0].temperament,
//         };
//         showCatInfo(catInfo);
//     } catch (error) {
//         console.error(error);
//         showError();
//     } finally {
//         hideLoader();
//     }
// }

selectElement.addEventListener('change', function() {
    const selectedBreedId = this.value;
    if (selectedBreedId) {
        showLoader();
        hideError();
        hideCatInfo();
        fetchCatByBreed(selectedBreedId);
    } else {
        hideCatInfo();
    }
});

selectContainer.style.display = 'none';
showLoader();

fetchBreeds();