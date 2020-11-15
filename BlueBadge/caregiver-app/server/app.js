
const express = require('express');
const app = express();
const sequelize = require('./db');



app.listen(3000, function(){
    console.log("The app is listening on port 3000");
});