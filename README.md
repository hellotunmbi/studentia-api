# Studentia API

Student record-based API built with Node JS. Uses MongoDB (mlab.com) as datastore.

Base Endpoint: https://studentia-api.herokuapp.com/api/

### Installation

- Install NPM
- Fork or Clone repository


### Running

- `cd` into repository
- Run `npm install`
- Run `npm start`


### How to use

You can use Postman to get and post requests

### API endpoints

`GET /students` - Gets list of all student records

`GET /student/<id>` - Get single student details

`POST /student` - Register a new student: Params: first_name, last_name, faculty, department, level, sex

`PUT /student/<id>` - Updates a single student's record

`DELETE /student/<id>` - Deletes a single student

