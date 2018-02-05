'use strict';
module.exports = function(app) {
  var RestaurantList = require('../controllers/RestaurantController');

  app.param('restaurantId', RestaurantList.change_param);
  app.param('menuId', RestaurantList.change_param2);
  app.param('foodId', RestaurantList.change_param3);



//apis for restaurants
  app.route('/').get(RestaurantList.list_all_restaurants);
  app.route('/').post(RestaurantList.create_a_restaurant);
  app.route('/:restaurantId').get(RestaurantList.read_a_restaurant);
  app.route('/:restaurantId').delete(RestaurantList.delete_a_restaurant);


//apis for menus
  app.route('/:restaurantId/menus').post(RestaurantList.create_a_menu);
  app.route('/:restaurantId/menus/:menuId').get(RestaurantList.get_a_menu);
  app.route('/:restaurantId/menus/:menuId').delete(RestaurantList.delete_a_menu);

  //apis for food
  app.route('/:restaurantId/:menuId/food').post(RestaurantList.create_a_food);
  app.route('/:restaurantId/:menuId/food/:foodId').get(RestaurantList.get_a_food);
  app.route('/:restaurantId/:menuId/food/:foodId').delete(RestaurantList.delete_a_food);

};