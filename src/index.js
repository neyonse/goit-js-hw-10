import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const breedSelectorEl = document.querySelector('.breed-select');
const catInfoEl = document.querySelector('.cat-info');

fetchBreeds().then(breeds => fillBreedSelectorEl(breeds));

function fillBreedSelectorEl(breeds) {
  breeds.forEach(breed => {
    const optionEl = document.createElement('option');

    optionEl.textContent = breed.name;
    optionEl.value = breed.id;
    breedSelectorEl.appendChild(optionEl);
  });
}

breedSelectorEl.addEventListener('change', e => {
  const selectedOption = e.target.options[e.target.selectedIndex];

  fetchCatByBreed(selectedOption.value)
    .then(selectedCat => gatherSelectedCatData(selectedCat))
    .then(selectedCatData => updateCatInfo(selectedCatData));
});

function gatherSelectedCatData(fetchedCat) {
  const selectedCatData = {
    breed: fetchedCat[0].breeds[0].name,
    img: fetchedCat[0].url,
    imgW: fetchedCat[0].width,
    imgH: fetchedCat[0].height,
    descr: fetchedCat[0].breeds[0].description,
    temperament: fetchedCat[0].breeds[0].temperament,
  };

  return selectedCatData;
}

function updateCatInfo({ breed, img, imgW, imgH, descr, temperament }) {
  catInfoEl.innerHTML = `
  <img src=${img} width=${imgW} height=${imgH}>
  <div class='cat-info-wrap'>
  <h2>${breed}</h2>
  <p><span>Description:</span> ${descr}</p>
  <p><span>Temperament:</span> ${temperament}</p>
  </div>
  `;
}
