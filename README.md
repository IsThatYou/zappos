# Restaurant RESTful API
## Setup the Environment
My application is built using node.js, mongodb, mongoose, express, and body parser. 
1. Install node.js first and that will give you the npm tool.
2. run `npm install` in the same directory as the package.json file. This will install all the correspoding dependencies.
3. Start the mongodb database locally by running `mongod`.
4. To start the application, run server by 
      `node server.js` in a linux machine 
or
    `npm run server.js` in windows.
    
## Basic Commands 
### Restaurants 
1. Get request to get all the restaurants. http://localhost:3000/
2. Get request for restaurant. http://localhost:3000/:restaurantId
3. Post request to create/update restaurant.http://localhost:3000/:restaurantId, with the request body represent a restaurant in json form.
4. Delete request to delete restaurant. http://localhost:3000/:restaurantId.
### Menus
1. Get request to get a specific menu. http://localhost:3000/:restaurantId/menus
3. Post request to create/update menu.http://localhost:3000/:restaurantId/menus/:menuId, with the request body represent a restaurant in json form.
4. Delete request to delete menu. http://localhost:3000/:restaurantId/menus/:menuId.
### Food
1. Get request to get a specific food. http://localhost:3000/:restaurantId/:menuId/food
3. Post request to create/update menu.http://localhost:3000/:restaurantId/:menuId/food/:foodId, with the request body represent a restaurant in json form.
4. Delete request to delete menu. http://localhost:3000/:restaurantId/:menuId/food/:foodId.
## Test
I used Postman to help develop and test my API.
