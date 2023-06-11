const MY_API_KEY =
  'live_puUKGgmlnUJcfdimVBdpD4oNPThpUOR4QA0rTiTbaq8It42r4X3vg0EFqQtB0Dze';

// fetch(url)
//   .then(function (response) {
//     return response.json(); //отримуємо response(відповідь) у форматі json від сервера, і кажемо, що нам потрібно перетворити її у джава об'єкт за допомогою методу json().
//   })
//   .then(function (data) {
//     console.log(data); //тут ми вже маємо отримані дані у вигляді з яким можемо далі працювати та прописуємо, що із ними робити далі.
//   })
//   .catch(function (error) {
//     console.log('Сталася помилка:', error);
//   });

// fetch(url)
//   .then(response => response.json()) //отримуємо response(відповідь) у форматі json від сервера, і кажемо, що нам потрібно перетворити її у джава об'єкт за допомогою методу json().
//   .then(data => console.log(data)) //тут ми вже маємо отримані дані у вигляді з яким можемо далі працювати та прописуємо, що із ними робити далі.)
//   .catch(error => console.log('Сталася помилка:', error));

export function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';

  // return fetch(url)
  //   .then(response => response.json())
  //   .catch(error => console.log(error));

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error('Ми не змогли знайти де лежать котики', response.status);
    }
    return response.json();
  });
}

// export function fetchCatByBreed(breedId) {
//   const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${MY_API_KEY}`;

//   return fetch(url)
//     .then(response => response.json())
//     .then(data => data)
//     .catch(error => {
//       console.error('Error fetching cat by breed:', error);
//       throw error;
//     });
// }
