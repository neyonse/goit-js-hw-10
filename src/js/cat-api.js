const MY_API_KEY =
  'live_puUKGgmlnUJcfdimVBdpD4oNPThpUOR4QA0rTiTbaq8It42r4X3vg0EFqQtB0Dze';

export function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error('Ми не змогли знайти де лежать котики', response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  const url = 'https://api.thecatapi.com/v1/images/search';

  return fetch(`${url}?breed_ids=${breedId}&api_key=${MY_API_KEY}`).then(
    response => {
      if (!response.ok) {
        throw new Error(
          'Здається котик, якого ви шукали, втік',
          response.status
        );
      }
      return response.json();
    }
  );
}
