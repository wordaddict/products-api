/* eslint-disable no-unused-vars */
/**
 * Created by Adeyinka Micheal
 */

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
  img: { 
    data: Buffer,
    contentType: String
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
