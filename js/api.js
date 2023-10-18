const API_KEY = "16504e7d787446209e0d069409a01fde";

// Función para hacer la solicitud a la API y mostrar juegos
async function fetchAndDisplayGames() {
  const url = `https://api.rawg.io/api/games?key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const gamesContainer = document.querySelector('.cardBx');

    data.results.forEach(game => {
      const gameCard = document.createElement('div');
      gameCard.classList.add('card', 'api-game-card');

      const gameImage = document.createElement('img');
      gameImage.src = game.background_image;
      gameImage.alt = game.name;

      const gameTitle = document.createElement('h1');
      gameTitle.textContent = game.name;

      const pricing = document.createElement('p');
      pricing.innerHTML = `Pricing <br> <span>${game.price}</span>`;

      const playNowLink = document.createElement('a');
      playNowLink.href = game.website;
      playNowLink.textContent = "Play Now";

      gameCard.appendChild(gameImage);
      gameCard.appendChild(gameTitle);
      gameCard.appendChild(pricing);
      gameCard.appendChild(playNowLink);

      gamesContainer.appendChild(gameCard);
    });
  } catch (error) {
    console.error("Error al obtener datos de la API", error);
  }
}

window.addEventListener("load", fetchAndDisplayGames);