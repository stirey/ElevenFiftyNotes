/*  Use the provided HTML, CSS, and JS files to fetch images of two separate characters from the Rick and Morty API. You will not need to edit/change anything in the HTML file, everything you need is already there.

Your fetch call to the specified endpoint is already defined in the index.js file. Finish coding the necessary promise resolvers for your fetch to access character information from the API.

Once you are seeing character information in the console, define a callback function that will be used to display the data. Your jsonified data from the API will need to be passed to this function.

Inside the display function you will need to:
1. Declare two variables used to store the separate character image links from the API.
2. Grab each image element from the index.html file, and set the src to be the image link you stored in a variable during step 1. After you are seeing images of two different characters, use the attached index.css file to style each image with the following properties:
1. Each image must have a border-radius
2. Each image must have a border
3. Each image must be centered on the webpage */


let baseURL = 'https://rickandmortyapi.com/api/character';


//code block that accesses character information from the API
fetch(baseURL)
    .then(result => result.json())
    .then(data => {
        console.log(data)
        displayData(data)
    })
    
    //define a callback function that will be used to display the data
function displayData(json){
    let characterOne = document.getElementById('imageOne');//getting and/or creating our elements
    let characterTwo = document.getElementById('imageTwo');
    //Create example
    let container = document.getElementById('container');
    let characterThree = document.createElement('img');

    //now we are assigning the data
    characterOne.src = json.results[0].image;
    characterThree.src = json.results[2].image;
    characterTwo.src= json.results[1].image;

    //PLace the element on our html
    container.appendChild(characterThree);
}






    