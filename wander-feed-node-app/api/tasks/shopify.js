var rp       = require("request-promise");
var request  = require("request");
var mongoose = require("mongoose");
var Product  = require("../models/product");

mongoose.connect("mongodb://localhost:27017/shopify-feed");

var url = "https://804c38c7e20539c1d5c856675950afae:50e1fc6bd3d62890b1522441599bd42f@wander-feed.myshopify.com/admin/products.json";

request.get(url, function(err, res, body) {
  if (err) return console.log(err);

  var products = JSON.parse(body).products;

  products.forEach(function(product, index) {
    
    console.log("Saving/updating: ", product.title);

    Product.findOne({ "shopify.id": product.id }, function(err, localProduct) {
      
      if (err) return console.log(err);
      
      if (localProduct) {
        return console.log("Update goes here...", localProduct)
        
        // UPDATE INVENTORY WHEN SOLD

        // PUT /admin/variants/#{id}.json
        //   {
        //     "variant": {
        //       "id": 808950810,                            
        //       "inventory_quantity_adjustment": -5
        //     }
        // }

        // Example: /admin/variants/808950810.json

        }
      });

      var newProduct = new Product();

      newProduct.shopify.id              = product.id;
      newProduct.shopify.title           = product.title;
      newProduct.shopify.body_html       = product.body_html;
      newProduct.shopify.vendor          = product.vendor;
      newProduct.shopify.product_type    = product.product_type;
      newProduct.shopify.created_at      = new Date(product.created_at);
      newProduct.shopify.handle          = product.handle;
      newProduct.shopify.updated_at      = new Date(product.updated_at);
      newProduct.shopify.published_at    = new Date(product.published_at);
      newProduct.shopify.template_suffix = product.template_suffix;
      newProduct.shopify.published_scope = product.published_scope;
      newProduct.shopify.tags            = product.tags;

      console.log(product);

      product.variants.forEach(function(variant) {
        newProduct.shopify.variants.push(variant);
      })

      product.options.forEach(function(option) {
        newProduct.shopify.options.push(option);
      })
              
      product.images.forEach(function(image) {
        newProduct.shopify.images.push(image);
      })

      newProduct.shopify.image = product.image;

      newProduct.save(function(err, localProduct) {
        if (err) return console.log("Error saving: ", err);
        console.log(localProduct.shopify.title + " was saved");
      })
    })
  })
