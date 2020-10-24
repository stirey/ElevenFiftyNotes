const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'qvqHM61CKkeuTJt0NYYRTNCEpMu0ickW'; 
let url;

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

//variables
nav.style.display = 'none';
let pageNumber = 0; //0 will be the default
let displayNav = false; //ensures that the nav won't be visible until we want it to be


//event listeners

searchForm.addEventListener('submit', fetchResults); //the searchForm variable targets the form element in the html. We use the searchForm variable and call the addEventListener method on it. We want to listen for things happening on the element, which in this case is the searchForm. The event we are looking for is the submit event. This is an HTML form event. Submit even fires on a form, not a button. When this event happens(the form is submitted by pressing the submit button), we will fire off a function called fetchResults, the second parameter in the function. 
nextBtn.addEventListener('click', nextPage); //when we click on the nextBtn, we fire off a function called nextPage.The click event is fired when a pointing device button is pressed and released on a single element. 
previousBtn.addEventListener('click', previousPage);

//the (e) is part of something in Javascript called an event handling function. Every event handling function receives an event object.
function fetchResults(e) {
    e.preventDefault();//add this method to make sure that a request isn't actually sent. This isn't a signup form where we want info sent somewhere which is the default nature of a form element. Instead we are using the form to construct our GET request. We are using the form to gather the data for that request. 
    url = `${baseURL}?api-keys=${key}&page=${pageNumber}&q=${searchTerm.value}`;
    console.log(url);//logging the alternative string query so we can see it

    //This is a rudimentary version of form validation, which is a method of ensuring that specific fields are filled out in a form. You've seen form validation. Think about when you go sign up for a new account somewhere, and you are prompted for more information. Form Validation will force you to enter information. In this case, we are not being forced to enter a start date or end date. It's optional. If the input fields for dates aren't blank, denoted by the !== '', the date values will be added to the URL string. If they're blank, the expressions inside of the conditionals are ignored.
    if(startDate.value !== ''){
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
        console.log('URL:', url);
    };

    if(endDate.vlue !== '') {
        url += '&end_date=' + endDate.value;
        console.log('URL', url);
    };

    fetch(url)
        .then(function(result) {
            console.log(result)
            return result.json();
    })   .then(function (json) { //creates a second promise that has a function that takes in the json object
        console.log(json); //console.log to check if operation worked
        displayResults(json); //we log the json object for now, tells it what to do with the jsonified
    })//this is an example of promise chaining  (if we need to catch an error we could do .catch(err => console.log(err.message)))
}
//displayResults is a common first step as we start to work with JSON data to manipulate the DOM. We're moving the data around so that we can pull it apart in other place.
function displayResults(json) {
    console.log('DisplayResults', json);
    // console.log(json.response.docs);
}
let articles = json.response.docs;
console.log(articles);

function nextPage(){
    console.log("Next button clicked");
}

function previousPage(){
    console.log("Next button clicked");
}