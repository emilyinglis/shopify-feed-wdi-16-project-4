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


// Note --> Maybe need two models when handling sizing and inventory?

// [
// {
//   "id": 3697025351,
//   "title": "Alpaca Dark Stripe Socks",
//   "body_html": "This is a description of this product.",
//   "vendor": "wander-feed",
//   "product_type": "Socks",
//   "created_at": "2015-12-11T11:09:03-05:00",
//   "handle": "alpaca-dark-stripe-socks",
//   "updated_at": "2015-12-11T11:42:00-05:00",
//   "published_at": "2015-12-11T11:09:00-05:00",
//   "template_suffix": null,
//   "published_scope": "global",
//   "tags": "loungewear",
//   "variants": [
//   {
//     "id": 11700120007,
//     "product_id": 3697025351,
//     "title": "S",
//     "price": "12.00",
//     "sku": "",
//     "position": 1,
//     "grams": 0,
//     "inventory_policy": "deny",
//     "compare_at_price": null,
//     "fulfillment_service": "manual",
//     "inventory_management": "shopify",
//     "option1": "S",
//     "option2": null,
//     "option3": null,
//     "created_at": "2015-12-11T11:09:03-05:00",
//     "updated_at": "2015-12-11T11:41:43-05:00",
//     "requires_shipping": true,
//     "taxable": true,
//     "barcode": "",
//     "inventory_quantity": 5,
//     "old_inventory_quantity": 5,
//     "image_id": null,
//     "weight": 0,
//     "weight_unit": "lb"
//   },
//   {
//     "id": 11700471239,
//     "product_id": 3697025351,
//     "title": "M",
//     "price": "12.00",
//     "sku": "",
//     "position": 2,
//     "grams": 0,
//     "inventory_policy": "deny",
//     "compare_at_price": null,
//     "fulfillment_service": "manual",
//     "inventory_management": "shopify",
//     "option1": "M",
//     "option2": null,
//     "option3": null,
//     "created_at": "2015-12-11T11:37:53-05:00",
//     "updated_at": "2015-12-11T11:41:51-05:00",
//     "requires_shipping": true,
//     "taxable": true,
//     "barcode": "",
//     "inventory_quantity": 1,
//     "old_inventory_quantity": 1,
//     "image_id": null,
//     "weight": 0,
//     "weight_unit": "lb"
//   },
//   {
//     "id": 11700471303,
//     "product_id": 3697025351,
//     "title": "L",
//     "price": "12.00",
//     "sku": "",
//     "position": 3,
//     "grams": 0,
//     "inventory_policy": "deny",
//     "compare_at_price": null,
//     "fulfillment_service": "manual",
//     "inventory_management": "shopify",
//     "option1": "L",
//     "option2": null,
//     "option3": null,
//     "created_at": "2015-12-11T11:37:53-05:00",
//     "updated_at": "2015-12-11T11:42:00-05:00",
//     "requires_shipping": true,
//     "taxable": true,
//     "barcode": "",
//     "inventory_quantity": 5,
//     "old_inventory_quantity": 5,
//     "image_id": null,
//     "weight": 0,
//     "weight_unit": "lb"
//   }
//   ],
//   "options": [
//   {
//     "id": 4488297543,
//     "product_id": 3697025351,
//     "name": "Size",
//     "position": 1,
//     "values": [
//     "S",
//     "M",
//     "L"
//     ]
//   }
//   ],
//   "images": [
//   {
//     "id": 7719519815,
//     "product_id": 3697025351,
//     "position": 1,
//     "created_at": "2015-12-11T11:09:03-05:00",
//     "updated_at": "2015-12-11T11:09:03-05:00",
//     "src": "https://cdn.shopify.com/s/files/1/1090/2538/products/dsc_0384.jpeg?v=1449850143",
//     "variant_ids": []
//   }
//   ],
//   "image": {
//     "id": 7719519815,
//     "product_id": 3697025351,
//     "position": 1,
//     "created_at": "2015-12-11T11:09:03-05:00",
//     "updated_at": "2015-12-11T11:09:03-05:00",
//     "src": "https://cdn.shopify.com/s/files/1/1090/2538/products/dsc_0384.jpeg?v=1449850143",
//     "variant_ids": []
//   }
// },