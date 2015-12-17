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
  // .put(productsController.productsUpdate)


module.exports = router;

