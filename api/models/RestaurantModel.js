'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Food = new Schema({
    name: {
      type: String,
      required: 'Kindly enter the name of the task'
    },
    price: Number
  });

var Menus = new Schema({
    name: {
      type: String,
      required: 'Kindly enter the name of the task'
    },
    food: [Food]
  });

var Restaurants = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  stars: {
    type: Number,
    default: 0
  },
  menus: [Menus]

});



module.exports = mongoose.model('Restaurants', Restaurants);