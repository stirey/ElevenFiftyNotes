// importing express in this new file
const Express = require('express');
// getting access to HTTP requests through express
const router = Express.Router();

//handling a GET request to the '/' endpoint
router.get('/' , (req, res) => res.send('I reeeeally love pies!'));

// example of subrouting from /pies
router.get('/fake', (req, res) => res.send('Cakes are better!'));
// exporting the router to use in another file
module.exports = router;
//this is the same as when a function returns
// similar to a 'return router'