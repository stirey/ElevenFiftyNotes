function reloadPage() {
    location.reload();
}
//wordSearch function is declared in my html file> onclick > wordSearch
function wordSearch() {
    document.getElementById('searchResult').style.visibility = 'visible'; //before the wordSearch function is executed, the search result div will be hidden.
//below are the paragraph tags specified in html doc. these will be used to display the data I am getting from the api.
    let word = document.getElementById('word');
    let definition = document.getElementById('definition');
    let example = document.getElementById('example');
    let spell = document.getElementById('spell');
//below I am getting the value that is entered into the searchBox
    let wordToSearch = document.getElementById('searchBox').value;

    let request1 = new XMLHttpRequest();
    //below, wordToSearch is storing the'value' that is entered in wordToSearch, limited to 10 definitions
    request1.open('GET', 'https://api.wordnik.com/v4/word.json/' + wordToSearch + '/definitions?limit=10&includeRelated=false&useCanonical=false&includeTags=false&api_key=o91c9esom44pnug9onne62wrvn50i1u091cgh37pvhlhk2043', true);
    request1.onload = function () {
        let data = JSON.parse(this.response);
        if (request1.status >= 200 && request1.status < 400) {
            let i = Math.ceil(Math.random() * 10);  // get a random number from 1 to 10
            word.innerHTML = data[i].word;  // get a random definition
            definition.innerHTML = data[i].text;
        } else {
            word.innerHTML = "Error";
            definition.innerHTML = "Error";
        }
    }
} 



// const baseURLWordnik = 'https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=o91c9esom44pnug9onne62wrvn50i1u091cgh37pvhlhk2043';