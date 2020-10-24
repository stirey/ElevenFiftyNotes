//const startDate = document.querySelector('.start-date');

// const storeName = document.querySelector('.store');
// const productName = document.querySelector('.product');
// const totalQuantity = document.querySelector('.quantity');
// const searchForm = document.querySelector('form');
// const submitBtn = document.querySelector('.submit');
// const input = document.querySelector('input');

// submitBtn.addEventListener('onclick', fetchResults);
//anytime a key is pressed in the form it will trigger this event

   let input = []
    document.getElementById('store').addEventListener("keyup",(e) => {
    input[0]= e.target.value;  
    });
    
    document.getElementById('product').addEventListener("keyup",(e) => {
    input[1]= e.target.value;   
       });
  
    document.getElementById('quantity').addEventListener("keyup",(e) => {
    input[2]= e.target.value;   
       });
    
    
    document.getElementById("input").addEventListener("submit", (e) => {
        e.preventDefault();
        let message = document.getElementById("message");
        message.innerText =`I bought ${input[2]} ${input[1]} at ${input[0]}`;
        
    })

    
    // let result = document.createElement('p');


// function displayData(fetchResults){
//     searchForm.appendChild("message");
   
// }
// let y = document.getElementById("store").value;
    // document.getElementById("demo").innerHTML = y;

    // let z = document.getElementById("quantity").value;
    // document.getElementById("demo").innerHTML = z;// let message = ['storeName', 'totalQuantity', 'productName'];

// fetch(message)
//     .then(result => result.json())

//     .then(json => displayData(json));

// function displayData(json){
//     console.log(json);

    
// }




//  function fetchResults() {
//   console.log(input.textContent); 
// }

    // message = `I shopped at ${storeName} for ${totalQuantity} ${productName}.`;

    // console.log(message);
    
//         }

//  fetch(message)
//         .then(function(result){
//             console.log(result)
//         })



// function displayResults(){
//     console.log(fetchResults());
// }