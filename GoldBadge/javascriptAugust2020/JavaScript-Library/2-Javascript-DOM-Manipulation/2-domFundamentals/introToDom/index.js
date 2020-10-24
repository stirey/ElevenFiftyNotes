const header =
document.getElementById('header')
console.log('header');

document.getElementsById("header").style.color = "green";
//OR
//header.style.color = "pink";
//header.innerText = "Hello World";

const errorList =
document.getElementsByClassName('error-list');
console.log(errorList);

errorList[0].innerText = "I changed error 1";
//Example 1 Looping
for (let i = 0; i< errorList.length; i++){
    errorList[i].style.colr="red"
}

//Example 2 Looping
for(error of errorList){
    error.style.color = "green"
}

//Example 3 Looping forEach //CAN NOT DO

errorList.forEach((error => (error.style.color = "purple"));

//getElementsByTagName

const tags = document.getElementsByTagName('p');
console.log(tags);
tags[0].innerText = "I like bacon";

const listItems = document.getElementsByTagName("li")
console.log(listItems);

// listItems[0].style.fontStyle = "italic";
// listItems[1].style.fontStyle = "italic";

for (let i = 0; i< listItems.length; i++){
    listItems[i].style.fontStyle = "italic";
}

// const header = document.querySelector('h1')
const header = document.querySelector('#header')
console.log(header);

const errorList = document.querySelector(".error-list");
console.log(errorList);

const errorList2 = document.querySelector("body > div > ul > li:nth-child(2)");
console.log(errorList2)


//querySelectorAll()

const listItems = document.querySelectorAll('.error-list')

const headerTags = document.querySelectorAll("h1");
console.log(headerTags);