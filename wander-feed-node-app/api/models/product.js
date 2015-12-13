var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  id: Number,
  title: { type: String, required: true },
  description: String,
  price: Number,
  image(s); [],                // is this correct for multiple images?
  variant: [],                 // is this correct for multiple sizes and/or colour variants?
  variant_inventory: Number,   // How to make this work for each size / what data type?
  product_type: String,
  vendor: String,
  handle: String,
  updated_at: String
});


// ----------------


// Possible option for varianet inventory?
var productVariantSchema = mongoose.Schema({
  id: Number,
  product_id: Number,
  title: String,
  price: Number,
  position: Number
  variant_inventory: Number
})

module.exports = mongoose.model('ProductVariant', productVariantSchema);


// ----------------

module.exports = mongoose.model('Product', productSchema);


