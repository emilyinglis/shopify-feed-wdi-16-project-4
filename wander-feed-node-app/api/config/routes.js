var express = require('express'),
    router  = express.Router(),
    bodyParser     = require('body-parser'),      //added off the back of movies api app
    methodOverride = require('method-override');  //added off the back of movies api app

var productsController = require('../controllers/productsController');


router.route('/products')
  .get(productsController.productsIndex)      
  .post(productsController.productsCreate);      


router.route('/products/:id') 
  .get(productsController.productsShow)       
  .delete(productsController.productsDelete)  

module.exports = router;


//----------------------
// ---> Music OMDBAPI Code
// router.route('/movies')
//   .get(moviesController.getAll)
//   .post(moviesController.createMovie);

// router.route('/movies/:id')
//   .get(moviesController.getMovie)
//   .delete(moviesController.removeMovie);

// module.exports = router


// --------------------
// ---> Project 3 API File Set Up reference
// May need to adapt for api so
// router.get('/events', eventController.allEvents);
// router.post('/events/new', eventController.newEvent);
// router.post('/events/edit', eventController.editEvent);
// router.post('/events/delete', eventController.deleteEvent);

// Not required for product
// .patch(productsController.productsUpdate)   // edit product ( patch - used post in project 3 api)
// .post(productsController.productsCreate)    //new product (post - match)