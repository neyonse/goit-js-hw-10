import { fetchBreeds } from './js/cat-api';

const breedSelectorEl = document.querySelector('.breed-select');
const catInfoEl = document.querySelector('.cat-info');

fetchBreeds().then(breeds => {
  console.log(breeds);
  fillBreedSelectorEl(breeds);
});

function fillBreedSelectorEl(breeds) {
  breeds.forEach(breed => {
    const optionEl = document.createElement('option');

    optionEl.textContent = breed.name;
    breedSelectorEl.appendChild(optionEl);
  });
}

breedSelectorEl.addEventListener('change', event => {
  const selectedBreedName = event.currentTarget.value;
  updateDescriptionName(selectedBreedName);
});

function updateDescriptionName(selectedBreedName) {
  let descriptionNameEl = catInfoEl.querySelector('h2');

  if (!descriptionNameEl) {
    descriptionNameEl = document.createElement('h2');
    catInfoEl.appendChild(descriptionNameEl);
  }

  descriptionNameEl.textContent = selectedBreedName;
  descriptionNameEl.classList.add('cat-name');
}
