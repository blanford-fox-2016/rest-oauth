# rest-oauth
Rest Oauth With Node Js & Express Generator

## How to check
* Login
> `curl -X POST "http://localhost:3000/api/auth" -d "username=admin&password=admin" | prettyjson`

* Save the token
* Check login & show all data users
> `curl -X GET "http://localhost:3000/api/users" --header "authorization: bearer <token> "| prettyjson `

* Show only one data users
> `curl -X GET "http://localhost:3000/api/users/{id}" --header "authorization: bearer <token> "| prettyjson `


* Add new data users
> `curl -X POST "http://localhost:3000/api/users/" --header "authorization: bearer <token> " -d "username={newUsername}&password={newPassword}&email={newEmail}" | prettyjson`

* Update data users
> `curl -X PUT "http://localhost:3000/api/users/" --header "authorization: bearer <token> " -d "username={newUsername}&password={newPassword}&email={newEmail}" | prettyjson`

* Delete data users
> `curl -X DELETE "http://localhost:3000/api/users/{id}" --header "authorization: bearer <token> `

* Check login no token in URL, false error message
> `curl -X GET "http://localhost:3000/api/users"  | prettyjson`

* Check login wrong token in URL, false error message
> `curl -X GET "http://localhost:3000/api/users?token=(wrong token)" | prettyjson`

************************************

## Installation:
> Install Newest Node JS (v6.\*.\* LTS) : [nodeJS](https://nodejs.org/en/)

> npm install -g express

> npm install -g express-generator

> express . (for express generator) & npm install

> npm install --save express (for manual express)

> npm install --save nodemon

Database : postgres
> npm install -g pg

> npm install --save pg

ORM : sequelize
> npm install -g sequelize

> npm install --save sequelize

> sequelize init


Authentication Token User
> npm install -g jsonwebtoken

> npm install --save jsonwebtoken


ORM's Installation :
> sequelize init

> Setting config.json

Pretty Json : (Add '| prettyjson' after installation)
> npm install --save-dev prettyjson

Install dependencies :
> npm install

How to start server :
> npm start

Migration :

Create_users
>Table's Name : Users

> Attributes : username, password, email

How To Migrate :
> sequelize db:migrate

Seeder :

|no|username|password|email|
|--|--------|--------|-----|
|1|admin|admin|admin@admin.com|

How To Seed :
> sequelize db:seed --seed seeders/20161025000529-admin_seed.js

************************************

# API References
## List of user routes :

| Route | HTTP | Description|
|-------|------|------------|
|`/api/auth`|POST| Get an access token|
|`/api/users`| GET | Get all users |
|`api/users/id`| GET | Get a single user |
|`api/users`| POST | Create new user |
|`api/users/id`| PUT | Update a user with new info |
|`api/users/id`|DELETE| Delete a user|


## HTTP Request's Example

| Action |Request|
|---------|-------|
|CREATE|`curl -X POST http://localhost:3000/api/users -d "username=newUsername&password=123456&email=newUser@yahoo.com"` |
|READ All Users|`curl -X GET http://localhost:3000/api/users`  |
| Read One User | `curl -X GET http://localhost:3000/api/users/1` |
|Edit One user | `curl -X PUT http://localhost:3000/api/users/1 -d "username=newUsername&password=12345689&email=newEmailUser@yahoo.com"`|
|Delete One User | `curl -X DELETE http://localhost:3000/api/users/1` |

************************************

## Directory :

```
.
├── README.md
├── app.js
├── bin
│   └── www
├── config
│   └── config.json
├── controller
│   └── index_controller.js
├── migrations
│   └── 20161024063240-create-users.js
├── models
│   ├── index.js
│   └── users.js
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── routes
│   ├── index.js
│   └── users.js
├── seeders
│   └── 20161024074904-admin_seed.js
└── views
    ├── error.jade
    ├── index.jade
    ├── layout.jade
    └── register.jade
```
************************************

## Contributor
Ken Duigraha Putra &copy; 2016
