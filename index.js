const resultDiv = document.querySelector("#resultDiv");

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const getCharacter = async (id = "") => {
  let url = "https://rickandmortyapi.com/api/character";

  if (id) {
    url += `/${id}`;
  }

  let characters = await fetchData(url);

  return characters;
};

const getLocation = async (id = "") => {
  let url = "https://rickandmortyapi.com/api/location";

  if (id) {
    url += `/${id}`;
  }

  let location = await fetchData(url);

  return location;
};

const getEpisode = async (id = "") => {
  let url = "https://rickandmortyapi.com/api/episode";

  if (id) {
    url += `/${id}`;
  }

  let episode = await fetchData(url);

  return episode;
};

const clearResultDiv = () => {
  resultDiv.innerHTML = "";
};

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

async function showAllCharacters() {
  clearResultDiv();
  let data = await getCharacter();
  let characters = data.results;
  characters.forEach((character) => {
    resultDiv.innerHTML += appendCharacter(character);
  });
}

const appendCharacter = (character) => {
  return `<div class="row mb-4">
               <div class="col-md-6">
                   <img src="${character.image}" alt="">
               </div>
               <div class="col-md-6">
                   <p>Name: ${character.name}</p> 
                   <p>Gender: ${character.gender}</p>                     
                   <p>Species: ${character.species}</p> 
                   <p>Status: ${character.status}</p> 
                   <p>Location: ${character.location.name}</p> 
                   <p>Origin: ${character.origin.name}</p> 
               </div>
             </div>`;
};

async function showThreeCharacters() {
  clearResultDiv();
  let character = await getCharacter(randomNumber(1, 826));
  resultDiv.innerHTML += appendCharacter(character);
  character = await getCharacter(randomNumber(1, 826));
  resultDiv.innerHTML += appendCharacter(character);
  character = await getCharacter(randomNumber(1, 826));
  resultDiv.innerHTML += appendCharacter(character);
}

async function showAllLocations() {
  clearResultDiv();
  let data = await getLocation();
  let location = data.results;
  location.forEach((location) => {
    resultDiv.innerHTML += appendLocation(location);
  });
}

const appendLocation = (location) => {
  return `<div class="row mb-4">
  <div class="col-md-12 text-center">
  <div class="border pt-3">
   <p>Name: ${location.name}</p>
   <p>Type: ${location.type}</p>
   </div>
  </div>
 </div>`;
};

async function showThreeLocations() {
  clearResultDiv();
  let location = await getLocation(randomNumber(1, 126));
  resultDiv.innerHTML += appendLocation(location);
  location = await getLocation(randomNumber(1, 126));
  resultDiv.innerHTML += appendLocation(location);
  location = await getLocation(randomNumber(1, 126));
  resultDiv.innerHTML += appendLocation(location);
}

async function showAllEpisodes() {
  clearResultDiv();
  let data = await getEpisode();
  let episode = data.results;
  episode.forEach((episode) => {
    resultDiv.innerHTML += appendEpisode(episode);
  });
}

const appendEpisode = (episode) => {
  return `<div class="row mb-4">
  <div class="col-md-12 text-center">
  <div class="border pt-3">
   <p>Name: ${episode.name}</p>
   <p>Air Date: ${episode.air_date}</p>
   </div>
  </div>
 </div>;`;
};

async function showThreeEpisodes() {
  clearResultDiv();
  let episode = await getEpisode(randomNumber(1, 51));
  resultDiv.innerHTML += appendEpisode(episode);
  episode = await getEpisode(randomNumber(1, 51));
  resultDiv.innerHTML += appendEpisode(episode);
  episode = await getEpisode(randomNumber(1, 51));
  resultDiv.innerHTML += appendEpisode(episode);
}
