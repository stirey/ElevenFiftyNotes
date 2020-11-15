const router = require('express').Router(); //requiring express is a function that returns the modules.export of express and it has a function on it called Router and we're going to substantiate a router > .Router

//this line is getting that table out from the model
const User = require('../db').import('../models/user');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const user = require('../models/user');

//remember in app.js, this is all at the user endpoint so to signup we will have to hit /user/signup
// CREATE A USER *****************************************************************
router.post('/signup', (req, res) => {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 12) //its better to have a higher value of hashes, more rounds of hashing will prevent them from hacking as easily
    })
// USE THE USER INFO TO CREATE AN ID AND CREATE A TOKEN THAT STORED THE ID IN IT************************************************
    .then(user => {
    //sign is a function with 3 arguments, 1. payload-the info that the token contains 2. secret password- we use that to sign the tokens with and we don't want to share with anyone, so we will put that in our .env file 3. options object - expiresIn is how long the password/token is valid. here we put 7d and you can find this in the json web token documentation
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '30d' });
// AND LASTLY WE SEND THAT TOKEN BACK*****************************************
        res.status(200).json({
            user: user,
            message: 'user created successfully',
            sessionToken: token  // the id is contained in the token
        });
    })
    .catch(err => res.status(500).json({error: err}))
});


// THIS IS THE SIGNIN
// user send something of the form { email: "email@email.com", password: "password"}
router.post('/signin', (req, res) => { 
    // here I'm going to find the user whose email matches the email in the database. findONe is a promise so next we will use a .then to handle the promise
    User.findOne({ where: {email: req.body.email }})
        .then(user => {
            if (user) {      // unhashed value    hashed value   remember user is the object we got back from the database. 'matches' is checking to see if user is using the correct password
                bcrypt.compare(req.body.password, user.password, (err, matches) => {
            if (matches) {      // user below is the user we found that matched in the database
                const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '30d'}) ;
              // after we create this token above...we're going to send the below back...
                res.status(200).json({
                  user: user,
                  message: "user successfully authenticated",
                  sessionToken: token //this will be the new token we just signed a few line above
                }) 

            } else {
                res.status(500).json({ error: "password mismatch" })
            }
                })

            } else {
            res.status(500).json({ error: "user not found" })
            }
    }) // if user findOne fails perhaps with the computer that the database exists crashes or turns off, etc...
            .catch(err => res.status(500).json({ error: "database error" }));
})







module.exports = router;



//NOTES:
//When a user signs up with their info, we don't know what the id of that is yet. We have to create it in the sequel database so the database can assign an id to that user. But when we get it back in the .then, this user has the id on it that was assigned by the sequel database. so we can drill into that at user.id. 

// tokens will be three long sections separated by a dot. you can read more about this in the documentation