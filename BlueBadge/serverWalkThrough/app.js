// configure the program to use environment variables
require('dotenv').config();

//here we are invoking Node's require() function, and specifying the name of the module we want to import. This would not work if we did not install express as a dependency
const Express = require('express');

//below we are making a new instance of express and calling it app, which will unlock the use of HTTP requests, middleware functionality, and some other basic application settings
const app = Express();

// import our database connection from the db.js file
const database = require('./db');
// connect with the locally running postgres database to allow us to both get and send data to our postgres server
database.sync();
//our app can now read the request body as a json
app.use(Express.json());

app.use(Express.static(__dirname + '/public'))
console.log(__dirname);

// gives us the webpage when we go to the '/' endpoint:
// http://localhost:4000/
app.get('/', (request, response) => response.render('index'));


// http://localhost:400/pies
// app.get('/pies', function(request, response) { response.send ('I love pies') } );

// import the piecontroller into this file
const pies = require('./controllers/piecontrollers');
// const pie = router;

app.use('/pies', pies)

const spanishfood = require('./controllers/spanishfoodcontroller');
app.use('/spanishfood', spanishfood);

// this will start our server on the port number we supply, and will console.log a message telling us the server is running
app.listen(process.env.PORT, function(){ console.log(`app is listening on port ${process.env.PORT}`)});