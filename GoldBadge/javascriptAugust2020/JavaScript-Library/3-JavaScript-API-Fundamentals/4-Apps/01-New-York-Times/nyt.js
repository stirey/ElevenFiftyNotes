const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json'; //url we are referencing for fetch, this is the api, this holds the data
const key = 'qvqHM61CKkeuTJt0NYYRTNCEpMu0ickW'; //this is my unique key that is required for some api's to unlock information, variable we are initializing and giving a value of our key
let url; //this is an empty bucket(variable)undefined variable until we write line 22

//we are referencing each element in the html) querySelector grabs the first one versus querySelectorAll would grab all of them
const searchTerm = document.querySelector('.search');//we use querySelector to find the first instance of this class/id/tag, this is a global space, if you ever need to change something its easy to reference
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');//this is a tag we are referencing
const section = document.querySelector('section');


nav.style.display = 'none';//since established in global scope page will load without prev and next buttons after the search is done, referencing the const nav. it won't appear after the search is done. 

let pageNumber = 0; //establishing the page number variable as 0 to begin
// console.log('PageNumber:', pageNumber);
let displayNav = false;
//it is listening for an event
//we created a variable, submit is a type of event
searchForm.addEventListener('submit', fetchResults);

//this controls the functionality of our clicks. when we 'click' next btn, we'll fire nextPage.
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage); //


//is this an example of hoisting?? a scope thing?
function fetchResults(e) {  //the e is a handle(event handler)-part of something in Javascript called an event handling function. 
     //console.log(e);
    e.preventDefault();//Calling preventDefault() during any stage of event flow cancels the event, meaning that any default action normally taken by the implementation as a result of the event will not occur. Without this it would just keep refreshing the page and not give results.NOTE: Right now, our button is attempting to submit the search form, but we don't have anywhere for it to send it to. This just causes the page to refresh, which will prevent you from seeing the result shown here. In order to see the search string, go into the settings of the console and select "Preserve Log". This will keep the log after a refresh instead of disposing of it. In the next module, we'll cover a way to prevent the button from trying to submit the form, which will render this step moot.
    url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`; //value takes the search term, can you explain the difference?
    // console.log('URL:', url);
    if (startDate.value !== '') {//checking to see if something is in there 
        console.log(startDate.value)//add said begin value to the begin date url and where to search from in API database
        url += '&begin_date=' + startDate.value;
        console.log('URL:', url);
    }
    if (endDate.value !== '') { //same as above but ending a end date for our search results if provided
        console.log(endDate.value)
        url += '&end_date=' + endDate.value;
        console.log('URL:', url);
    }
    fetch(url) //using the fetch function to pull data from our API, based on the URL parameters
        .then(function (result) { //the completed fetch method, we create a promise .then that returns a response object called result.
            console.log(result)// console log to see said results are there
            return result.json();//the promise asynchronously returns a function that converts the result into usable json format-result.json() is that function call. 
        })
        .then(function (json) { //creates a second promise that has a function that takes in the json object
            console.log(json); //console.log to check if operation worked
            displayResults(json); //we log the json object for now, tells it what to do with the jsonified
        })//this is an example of promise chaining  (if we need to catch an error we could do .catch(err => console.log(err.message)))
}
function displayResults(json) { // creating a function to take jsonified data and begin putting into our HTML to see
    console.log('Display Results', json);
    // console.log(json.response.docs);
    //checks to see if theres a child from the previous search, removes the child and will continue to do this until their all empty. The while loop will clear out any articles before new serach results are added. 
    while (section.firstChild) {  
        section.removeChild(section.firstChild); //removes the child and keeps doing this until all children are removed. 
    }
    let articles = json.response.docs; //establishing articles as the .docs part of the json object, storing the specific data in a variable see above line of code. 
    // console.log(articles); //make sure you see the ten objects
    if (articles.length === 0) {  //if there is nothing in our results
        console.log('No results'); //it will console no results
    } else {  //going through the entire array of items one by one and do the following(iterate over that array in the else)
        for (let i = 0; i < articles.length; i++) {
            // console.log(i);
            //creates placeholders for information gained from the articles. we have not referenced where to go to get the object yet. page display results 02. Here we created an article variable that will create a node in the DOM tha tis an article element
            let article = document.createElement('article');
            //created a heading variable that creates a node in the DOM that is an h2 element
            let heading = document.createElement('h2');
            //created a link variable that is going to use the a element, the anchor tag which will allow us to create an href link.
            let link = document.createElement('a');
            //we add an image element that will create an image element.
            let img = document.createElement('img');
            //we've delared a para variable that will append a p tag to the DOM to be used for some of our JSON data.
            let para = document.createElement('p');
            //we're declaring a clearfix variable that will later on append a div to the DOM.
            let clearfix = document.createElement('div'); // is a way for an element to clear its child elements automatically without any additional markup
            //we create a current variable that holds the data of the current article as we iterate.
            //each time it goes through this for loop, the current value will change (i++)
            //we log the current data so that we can see it in the console.
            let current = articles[i]; 
            console.log('Current:', current); //to view all objects in articles
            //since link is an (a) element, we need to attach an href property to it. current.web_url grabs the hyperlink for the current article out of the json result. This will set the value for the link.href each time we iterate. 
            link.href = current.web_url; 
            //the text that we'll use in the link.textContent is set to the value of current.headline.main which is part of the json object from the nyt api.You can see this when you drill down into the data. Objec>Headline>main-then you see the title of article.
            link.textContent = current.headline.main; //we are establishing what the text will be within the headline, we use dot notation to break into the headline. The test that we'll use in the link.textContent is set to the value of current.headline.main, which is part of the json object from the NYT API. You can see this when you drill down into the data. 

            //we are adding the textContent attribute to our para variable.Each result will show this at the start of the p tag that is created by para. //adding the keywords as a placeholder for future span.
            para.textContent = 'Keywords: '; 
            //now we have a for loop inside of our for loop. We are using this nested loop to iterate over the current object, specifically the keywords array for that object. If you look through the json results, you'll see that keywords is a property of the entire object, and its an array. Here we iterate through the length of the array for the current result object. 
            for (let j = 0; j < current.keywords.length; j++) { //this checks the keywords and loops through them, skips if no keywords available.
                //as we iterate, we create a span for each keyword.A span will be an element that will end when the item ends. So the span of pizza will start at the p and end at the a. If we were to use a p tag here, it would cover the entirety of the parent object.
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' ';//add keywords to the span element until reaches end of array
                //we append each span to the para node.
                para.appendChild(span);// add span element to the paragraph tag
            }
            //below we use a conditional to check the json for data. There is a multimedia property in the json. If it has anything in it, if the length is > 0, we'll do some stuff with it. 
            if (current.multimedia.length > 0) { 
                //If there is an object, we want to concatenate a string with the url for the html src value. We will add the first items in the multimedia array:current.multimedia[0].url.
                img.src = 'http://www.nytimes.com/' + current.multimedia[0]. url;  //creates a link to establish an image on the page when results are returned. 
                img.alt = current.headline.main;  //if no image is broken, it creates alt text
            }
            //remember we still have an outer loop and printing the results. Here's we're using the setAttribute method to target our clearfix class. It's a class in the CSS file.
            clearfix.setAttribute('class', 'clearfix');  //setting a class with the clearfix

            heading.appendChild(link); //from inside out of bottom up in this instance we are appending all of our HTML pieces to be displayed
            //link is child of next

            //we call appendChild on the article element.This will create a child node on that element. We pass in heading to the appendChild method. This means that there will be an h2 element created in side each article element. 
            article.appendChild(heading);
            article.appendChild(img);
            //adding clearfix and para as children of article.
            article.appendChild(para);
            article.appendChild(clearfix);
            //we call the appendChild method on the section element. We pass in the article to that. This way, the article is a child of section, and the h2 is a grandchild of section.
            section.appendChild(article); //articles is placed within the entire section tag
        }
    }
    //below we check to see if articles. length is great than or equal to 10.If it is , we will set the CSS display to block. Notice we are targting the nav element created in teh nav variable at the top of the page.This nav is targeting the nav in our original html file, we have this element.
    if (articles.length >= 10) {  
        nav.style.display = 'block';  
    } else {
        nav.style.display = 'none';  //if there are less than 10 it doesn't show anything
    }
}
function nextPage(e) {  //this is the function for the next page buttonm it receives the event handler
    // console.log('Next button clicked');
    pageNumber++;  //will increase the page number by 1
    fetchResults(e);  //passes the event handler back to the fetchResults, rerun the function
    console.log('Page Number:', pageNumber);  //console the results so we can see it increment.
}
function previousPage(e) {
    // console.log('Previous button clicked');
    if (pageNumber > 0) {  //will check to see what page number it is if page number is 1 it will go back, if 0 it won't do anything
        pageNumber--; //this removes a page
    //if the value is 0, we return nothing and get out of the function thus ensuring that the value won't drop below 0.
    } else {
        return;
    }
    //if the value wasn't 0 and we've decremented the page number, we run fetchResults again.
    fetchResults(e);
    console.log('Page:', pageNumber);  
}





























// const baseURL = 'https://api.nytimes.com/svc/search/v2/articlessearch.json';//1
// const key ='qvqHM61CKkeuTJt0NYYRTNCEpMu0ickW';//2
// let url; //3

// //SEARCH FORM
// const searchTerm = document.querySelector('.search');
// const startDate = document.querySelector('.start-date');
// const endDate = document.querySelector('.end-date');
// const searchForm = document.querySelector('form'); //targets the form element in the html page
// const submitBtn = document.querySelector('.submit');

// //RESULTS NAVIGATION
// const nextBtn = document.querySelector('.next');
// const previousBtn = document.querySelector('.prev');
// const nav = document.querySelector('nav');

// //RESULTS SECTION
// const section = document.querySelector('section');

// nav.style.display = 'none';

// let pageNumber = 0;
// let displayNav = false;//this ensures it is not visible until you want it to be

// searchForm.addEventListener('submit', fetchResults);
// nextBtn.addEventListener('click', nextPage);
// previousBtn.addEventListener('click', previousPage);
// //(e) is part of something in javascript called an event handling function. 

//                     //1
//  function fetchResults(e) {
//     fetch(url).then(function(result) {
//         return result.json();
//       }).then(function(json) {
//         displayResults(json); //1 & //3
//       });
//     }
    
//     //2
//     function displayResults(json) {
//       console.log("DisplayResults", json); 
//     };
    
// // Assemble the full URL
// url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //3
//  //4
//  if(startDate.value !== '') {
//     console.log(startDate.value)
//   url += '&begin_date=' + startDate.value;
// };

// if(endDate.value !== '') {
//   url += '&end_date=' + endDate.value;
// };

//  fetch(url)
//     .then(function(result){
//         console.log(result)
//         return result.json();
//     }) .then(function(json){
//         console.log(json);
//     });
//     }
                      
// function nextPage(){
// console.log("Next button clicked");
// } //5
                      
// function previousPage(){
// console.log("Next button clicked");
//                       } //5

