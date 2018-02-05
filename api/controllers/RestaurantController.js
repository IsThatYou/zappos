'use strict';


var mongoose = require('mongoose'),
  Restaurants = mongoose.model('Restaurants');

  exports.change_param = function(req, res,next, id) {
    Restaurants.findById(id, (err, doc) => {
        if (err) return next(err);
        if (!doc) {
          err = new Error('Document not found');
          err.status = 404;
          return next(err);
        }
        req.question = doc;
        return next();
      });
};
exports.change_param2 = function(req, res,next, id) {
    req.menu = req.question.menus.id(id);
    if (!req.menu) {
      err = new Error('Answer not found');
      err.status = 404;
      return next(err);
    }
    return next();
};

exports.change_param3 = function(req, res,next, id) {
   
    req.food = req.menu.food.id(id);
    console.log(req.food);
    if (!req.menu) {
      err = new Error('Answer not found');
      err.status = 404;
      return next(err);
    }
    return next();
};


exports.list_all_restaurants = function(req, res) {
    Restaurants.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create_a_restaurant = function(req, res) {

  var new_task = new Restaurants(req.body);

  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_restaurant = function(req, res) {
    Restaurants.findById(req.params.restaurantId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_restaurant = function(req, res) {
    Restaurants.findOneAndUpdate({_id: req.params.restaurantId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_restaurant = function(req, res) {


    Restaurants.remove({
    _id: req.params.restaurantId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Restaurants successfully deleted' });
  });
};

exports.create_a_menu = function(req, res,next) {
    console.log(req.body);
    req.question.menus.push(req.body);
    req.question.save((err, question) => {
      if (err) return next(err);
      res.status(201);
      res.json(question);
    });
};

exports.get_a_menu = function(req, res) {
    res.json(req.menu);
};

exports.delete_a_menu = function(req, res) {

    req.menu.remove(err => {
        req.question.save((err, question) => {
          if (err) return next(err);
          res.json(question);
        });
      });
};

exports.create_a_food = function(req, res,next) {
    console.log(req.question.menus);
    req.menu.food.push(req.body);
    req.question.save((err, question) => {
      if (err) return next(err);
      res.status(201);
      res.json(req.menu);
    });
};

exports.get_a_food = function(req, res) {
    res.json(req.food);
};

exports.delete_a_food = function(req, res) {

    req.food.remove(err => {
        req.question.save((err, question) => {
          if (err) return next(err);
          res.json(qreq.menu);
        });
      });
};