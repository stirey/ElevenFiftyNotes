// const Express = require('express');
// const router = Express.Router();
const router = require('express').Router();
const SpanishFood = require('../db').import('../models/spanishfood');

const validateSession = require('../middleware/validate-session');

router.get('/', (req, res) => {
    SpanishFood.findAll() //returns all of the rows in the database
        .then(food => res.status(200).json(food))  // 'food' had all of the food in it because findall returns a promise which included all of the food
        .catch(err => res.status(500).json({error: err}))
})
//creates a new spanish food with all of our information in it
router.post('/', validateSession, (req, res) => {
    const spanishFoodFromRequest = {
        nameOfFood: req.body.name,
        isSpicy: req.body.spicy,
        numberOfIngredients: req.body.ingredients,
        hasBeans: req.body.beans,
        countryOfOrigin: req.body.origin,
        doILikeThis: req.body.like
    }

    SpanishFood.create(spanishFoodFromRequest)
        .then(food => res.status(200).json(food)) //the food we got back from here was the one specific row/food we created in the database
        .catch(err => res.status(500).json({error: err}))
})
//find one food by it's name
// http://localhost:4000/spanishfood/name
//  : tells the code that name is a paramter, meaning a variable in the url
//when sending a request you do not need the :name, you simply write the name as it appears in the database
router.get('/:name', (req, res) => {
    SpanishFood.findOne({
       where: {
           nameOfFood: req.params.name
       } 
    })
    .then(food => res.status(200).json(food)) //the food returning here is the one piece of food that meets the object reqirements above (nameOfFood)
    .catch(err => res.status(500).
    json({error: err}))  
});


//for full CRUD functionality we need to build out two more endpoints (Create, Reupdate, Delete)

//putting by 'id', we can use the id to target things on the backend.
router.put('/:id', (req, res) => {
    //we're going to update based on the req.body, but if we only use this, it will update every line in the database
    SpanishFood.update(req.body, { //this represents the data you want to update it with (req.body), this update function returns a promise
    // params below represents the endpoint. this could be 1-5 lines depending on how you break up your object
        where: { id: req.params.id }// this is the options object that specifies which ONE we want to update, id is a column
    }) // .then to get the value inside of the promise that update returns.
    .then(result => res.status(200).json(result)) //returns a number with how many rows were updated with your update command
    .catch(err => res.status(500).json({ error: err}))
});

//targeting by id
// if we don't pass anything into destroy, it will delete everything in our table, so we need to pass in an options object that specifies what we want to delete.
//Javascript has a special form of if/else specific for error handling called try/catch. Try this...and if theres an error Catch this(in this example its an error)
//below is an example of async style
router.delete('/:id', async (req, res) => {
    try {
        const result = await SpanishFood.destroy({ //result stores the number of rows deleted/destroyed in the database
        where: { id: req.params.id }
    });

    res.status(200).json(result)
}   catch (err) {
    res.status(500).json({error: err});
}
});



module.exports = router;
