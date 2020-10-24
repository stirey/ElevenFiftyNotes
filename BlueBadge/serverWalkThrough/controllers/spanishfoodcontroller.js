// const Express = require('express');
// const router = Express.Router();
const router = require('express').Router();
const SpanishFood = require('../db').import('../models/spanishfood');

router.get('/', (req, res) => {
    SpanishFood.findAll()
        .then(food => res.status(200).json(food))
        .catch(err => res.status(500).json({error: err}))
})

router.post('/', (req, res) => {
    const spanishFoodFromRequest = {
        nameOfFood: req.body.name,
        isSpicy: req.body.spicy,
        numberOfIngredients: req.body.ingredients,
        hasBeans: req.body.beans,
        countryOfOrigin: req.body.origin,
        doILikeThis: req.body.like
    }

    SpanishFood.create(spanishFoodFromRequest)
        .then(food => res.status(200).json(food))
        .catch(err => res.status(500).json({error: err}))
})
//find one food by it's name
// http://localhost:4000/spanishfood/name
//  : tells the code that name is a paramter, meaning a variable in the url
//when sending a request you do not the :name, you simply write the name as it appears in the database
router.get('/:name', (req, res) => {
    SpanishFood.findOne({
       where: {
           nameOfFood: req.params.name
       } 
    })
    .then(food => res.status(200).json(food))
    .catch(err => res.status(500).
    json({error: err}))  
});

router.put('/:id', (req, res) => {
    SpanishFood.update(req.body, {
        where: { id: req.params.id }
    })
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({ error: err}))
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await SpanishFood.destroy({
        where: { id: req.params.id }
    });

    res.status(200).json(result)
}   catch (err) {
    res.status(500).json({error: err});
}
});

module.exports = router;
