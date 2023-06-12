import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import SlimSelect from 'slim-select';

const breedSelectorEl = document.querySelector('.breed-select');
const catInfoEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');

// new SlimSelect({
//   select: breedSelectorEl,
// });

hideBreedSelectorEl();
hideErrorEl();

fetchBreeds()
  .then(breeds => {
    fillBreedSelectorEl(breeds);
    hideLoaderEl();
    showBreedSelectorEl();
  })
  .catch(showErrorEl)
  .finally(hideLoaderEl);

function fillBreedSelectorEl(breeds) {
  breeds.forEach(breed => {
    const optionEl = document.createElement('option');

    optionEl.textContent = breed.name;
    optionEl.value = breed.id;
    breedSelectorEl.appendChild(optionEl);
  });
}

breedSelectorEl.addEventListener('change', onBreedSelectChange);

function onBreedSelectChange(e) {
  const selectedOption = e.target.options[e.target.selectedIndex];

  showLoaderEl();
  hideErrorEl();

  if (catInfoEl.hasChildNodes()) {
    hideCatInfo();
  }

  fetchCatByBreed(selectedOption.value)
    .then(selectedCat => gatherSelectedCatData(selectedCat))
    .then(selectedCatData => {
      hideLoaderEl();
      updateCatInfo(selectedCatData);
    })
    .catch(showErrorEl)
    .finally(hideLoaderEl);
}

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

  showCatInfo();
}

function hideBreedSelectorEl() {
  breedSelectorEl.classList.add('hidden');
}

function showBreedSelectorEl() {
  breedSelectorEl.classList.remove('hidden');
}

function hideErrorEl() {
  errorEl.classList.add('hidden');
}

function showErrorEl() {
  errorEl.classList.remove('hidden');
}

function hideLoaderEl() {
  loaderEl.classList.add('hidden');
}

function showLoaderEl() {
  loaderEl.classList.remove('hidden');
}

function hideCatInfo() {
  catInfoEl.classList.add('hidden');
}

function showCatInfo() {
  catInfoEl.classList.remove('hidden');
}
