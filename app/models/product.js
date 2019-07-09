/* eslint-disable no-unused-vars */
/**
 * Created by kingriyor
 * Updated by Adeyinka Micheal on 21st February 2019
 */

ID
Name
Description
Price
Category
Image
Color


const mongoose = require('mongoose');

const { Schema } = mongoose;
const config = require('../config/config');

const collection = config.mongodb.collections;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  Id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
}
);

const ProductModel = mongoose.model(collection.products, ProductSchema);

module.exports = ProductModel;
