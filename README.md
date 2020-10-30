# SIGN / SIGNUP RESTful API
This api has a register, login and user search route.

## Getting Started

For use this API with another database you can change the link connecting in the .env file.

### Installing Prerequisites

You will need to install all de dependecies used in this API:
```
npm install
```

Create a .env file with your own environment variables.

Then you can run the following command an access all routes:
```
npm install
```

### Usage

You can also insert this API into your front-end project for a better user register and login management.
Below you can see a small example of the data created in MongoDB.

```
{
  "_id": "5f9baf78fecef54eac04fa5a",
  "name": "Alan Palhau",
  "email": "palhau@email.com",
  "phone": 11955554442,
  "password": "$2a$10$TGpYSSAyeK8TOYsv.eUhieJ6fBhMVr9MGPUhfqrDea/BaAlkE44Ke",
  "createDate": "2020-10-30T06:15:20.369Z",
  "updateDate": "2020-10-30T06:15:20.369Z",
  "lastLoginDate": "2020-10-30T06:15:28.273Z",
}
```

## Endpoints Access hosted on Heroku
* [Register](https://signin-signup-api.herokuapp.com/api/register)
* [Login](https://signin-signup-api.herokuapp.com/api/login)
* [User Search](https://signin-signup-api.herokuapp.com/api/search/:userEmail)
  
For more informations visit the Documentation (https://documenter.getpostman.com/view/10332173/TVYKaw9d).


## Built With

* [Express](http://expressjs.com/) - The web framework used
* [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken) - Used to generate the auth-token
* [BcryptJS](https://www.npmjs.com/package/bcryptjs) - Used to hash the password
* [Joi](https://joi.dev/) - For data validation
* [MongoDB](https://www.mongodb.com/) - The databse used
* [NPM](https://www.npmjs.com/) - Dependency Management

## Versioning

We use [GitHub](https://github.com/) for versioning. For the versions available, see the [tags on this repository](https://github.com/palhau/truck-api-logistics/commits/master). 
We use [Heroku](https://www.heroku.com/) for hosting. For the version available.

## Author

* **Alan Vieira Palhau** - *Initial work* - [Palhau](https://github.com/palhau)