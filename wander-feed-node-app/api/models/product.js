var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  // title: String,
  // description: String,
  // product_type: String,
  // vendor: String,
  // updated_at: String,
  // images: [],                 // is this correct for multiple images?
  // variant: [],                  // is this correct for multiple sizes and/or colour variants?
  // variant_inventory: Number,     // How to make this work for each size / what data type?
  // variant_price: String 
  local: {

  },
  shopify: {
    id: Number,
    title: String,
    body_html: String,
    vendor: String,
    product_type: String,
    created_at: Date,
    handle: String,
    updated_at: Date,
    published_at: Date,
    template_suffix: String,
    published_scope: String,
    tags: String,
    variants: [],
    options: [],
    images: [],
    image: []
  }

});

module.exports = mongoose.model('Product', productSchema);
