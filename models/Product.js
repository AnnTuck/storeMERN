const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Model for Products.  Product Id# is stored in Collections database to link.
 */
var ProductSchema = new Schema({
  type: String,
  description: String,
  image_url: {
    type: String,
    trim: true,
    validate:[validator.isURL, "invalid URL"],
    required: "Please enter your fabric picture URL."
  },    
purchase_url: {
  type: String,
  trim: true,
  validate:[validator.isURL, "invalid URL"]        
  },
  pattern_name: String,
  pattern_url: {
    type: String,
    trim: true,
    validate:[validator.isURL, "invalid URL"]        
  },
  artist: String,
  collection: String
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;