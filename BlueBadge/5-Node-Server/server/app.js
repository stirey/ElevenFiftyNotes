require("dotenv").config();
//Here we require the use of the express npm package that we've installed in our dependencies
let express = require('express');
//we create an instance of express. We're actually firing off a top-level express() function, a function exported by the Express module. This allows up to create an Express app.
let app = express();

const sequelize = require("./db");

let journal = require('./controllers/journalcontroller');
//here we import the usercontroller.js and assign it to a variable called user
let user = require('./controllers/usercontroller');
sequelize.sync();
//sequelize.sync({force: true})

//below code will allow us to accept the json into our server and convert it to an object that can be used in our controller
app.use(express.json());
//we call upon the use() method from the Express framework and create a route to access any future functions in our usercontroller.js
app.use('/user', user );

app.use(require('./middleware/validate-session'))
app.use('/journal', journal);





// app.listen will use express to start a UNIX socket and listen for connections on the given path. The given path is localhost:3000 indicated by the parameter 3000
app.listen(3000, function(){
    console.log('App is listening on port 3000');
})
//above line- we call a callback function when the connection happens with a simple console.log. This allows us to see a message with the port that the server is running on. 