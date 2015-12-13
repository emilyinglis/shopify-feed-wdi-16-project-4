var express = require('express'),
    router  = express.Router();

var productsController = require('../controllers/productsController');

router.route('/')

router.route('/products')
  .get(productsController.productsIndex)      //all products (get - match)


router.route('/products/:id') 
  .get(productsController.productsShow)       // view product (n/a)
  .delete(productsController.productsDelete)  // delete product (delete - used post in project 3 api)


  // --------------------
  // Project 3 API File Set Up reference
  // May need to adapt for api so
  // router.get('/events', eventController.allEvents);
  // router.post('/events/new', eventController.newEvent);
  // router.post('/events/edit', eventController.editEvent);
  // router.post('/events/delete', eventController.deleteEvent);

  // Not required for product
  // .patch(productsController.productsUpdate)   // edit product ( patch - used post in project 3 api)
  // .post(productsController.productsCreate)    //new product (post - match)

module.exports = router;