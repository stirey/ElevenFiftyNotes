//import sequelize package
const Sequelize = require('sequelize'); 
//connect to database using sequelize where
//                                  db name         user        password            options
const database = new Sequelize(process.env.NAME, 'postgres', process.env.PASS, {
    host: 'localhost',
    dialect: 'postgres'
});
//authenticate using the username and password- make sure your db name is exactly the same in your .env variable
database.authenticate()
    .then(() => console.log('postgres db is connected'))
    .catch(err => console.log(err));

//exporting the connection
module.exports = database;