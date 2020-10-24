const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace(e){
    e.preventDefault();
    
    fetch(baseURL)
      .then(result => result.json())
      .then(json => {
          console.log(json);
          displayRockets(json);
      })
}

function displayRockets(rockets) {
    rockets.forEach(r => {
        let rocket = document.createElement('li');
        rocket.innerText = r.cost_per_launch; //this is where the connection between html and javascript takes place
        spaceShips.appendChild(rocket);
    })
}