const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Collections is a parent for Products.  

const CollectionSchema = new Schema({
  collection_name: {
    type: String,
    trim: true,
    required: 'Collection name is Required'
  },

  collection_type: {
    type: String,
    trim: true       
},
  
  //Id# of each product will be pushed here if collection is entered in product
  productPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Products'
    }
  ]
//Id# of each product will be pushed here if collection is entered in product
  // patternPosts: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Products'
  //   }
  // ]
});

const Collections = mongoose.model('Collections', UserSchema);

module.exports = Collections;
