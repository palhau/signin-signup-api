# SIGN / SIGNUP RESTful API
This api has a register, login and user search route.

## Getting Started

For use this API with another database you can change the link connecting in the .env file.

### Prerequisites

First of all you need to install all de dependecies used in this API:
```
npm install
```

### Installing

You can also insert this API into your front-end project for a better user register and login management.
Below you can see a small example of the data update in MongoDB.

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
For more informations visit the Documentation (https://documenter.getpostman.com/view/10332173/SzKN22W6?version=latest).

## Running the tests

On your terminal execute:

```
npm teste
```
and wait the jest finish the process.

## Built With

* [Express](http://expressjs.com/) - The web framework used
* [MongoDB](https://www.mongodb.com/) - The databse used
* [NPM](https://www.npmjs.com/) - Dependency Management

## Versioning

We use [GitHub](https://github.com/) for versioning. For the versions available, see the [tags on this repository](https://github.com/palhau/truck-api-logistics/commits/master). 

## Author

* **Alan Palhau** - *Initial work* - [PurpleBooth](https://github.com/palhau)