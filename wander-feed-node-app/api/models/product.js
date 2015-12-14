var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  title: String,
  description: String,
  product_type: String,
  vendor: String,
  updated_at: String,
  images; [],                 // is this correct for multiple images?
  variant: [],                  // is this correct for multiple sizes and/or colour variants?
  variant_inventory: Number,     // How to make this work for each size / what data type?
  variant_price: String 
});

module.exports = mongoose.model('Product', productSchema);


// Note --> Maybe need two models when handling sizing and inventory?

