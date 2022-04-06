# Simple REST API Built with Express.js, Node.js & MongoDB

### Project Aim ###
The aim of this project was to tryout testing with REST Client VSCode Extention. I have been using postman for test until i found this cool VSCode extention that enables you to carryout test just the same way as doing it on Postman.

## Setup

The API requires [Node.js](https://nodejs.org/en/download/)

To get up and running: 

**1.** Clone the repo.
```
git clone https://github.com/johnchristotle/rest-api-backend-app.git
```

**2.**  ```cd``` into repo. Use your own directory name eg cd my-directory-name OR
Use the same directory name(below) if you do not change it.
```
cd rest-api-backend-app
```

**3.**  Setup the application by installing its dependencies located at the ```package.json``` file with
```
npm install
```

**4.**  NOTE: The app gets up and running on port 3000 with ```npm devStart```.

**5.**  **Very Important!** Create a ```.env``` file and set ```mongoose uri```.
 

## Testing the API routes.

This is an API with get, post, patch and delete requests, so we can as well test with [Postman](https://www.getpostman.com/); however, we will be testing with ```REST Client``` an extention for VS-Code [Rest-Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client); 

### How to use Rest Client ###
After installing it, just create a file that ends with .rest ```e.g route.rest``` and place your methods there.

```
GET http://localhost:3000/students

###
POST http://localhost:3000/students
Content-Type: application/json

{
    "name": "Nimi Hosfall",
    "age": 38,
    "country": "Canada",
    "subscribedToChannel": false
   
}

Result:

{
  "name": "Nimi Hosfall",
  "age": 38,
  "country": "Canada",
  "subscribedToChannel": false,
  "_id": "624db38bc41e3caaeaa77f39",
  "date": "2022-04-06T15:36:43.573Z",
  "__v": 0
}
```
remenber to separate each method line with ###.


### Logging

All logs are saved in ```totlesoft.log``` in the application's root.


## Built With

 * [Node.js](https://nodejs.org)
 * [Express](https://expressjs.com/)
 * [Rest-Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) - For testing

