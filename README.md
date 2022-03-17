 
# User- management API's

This is a backend project based on  node js  and  express which manages the user documents in collections (in mongodb database) through CRUD operations.
In this we have 4 api's -> createuser.js , update.js ,  show.js , delete.js  inside routes folder.
I have discussed about all 4 of the in detail below.





## Installation

Install node package manager

```bash
  npm install 
  
```
Install express

```bash
  npm install express
  
```






    
## Starting Server locally

To start server , run the following command

```bash
  node index.js
```


# CRUD API's 
## user-create api

#### Request

```http
  (POST request)

  localhost:5000/api/createuser 

json body -> {
"username" :  "abcd",(must be unique)
"password" : "password010",
"name"     : "udai"

"phone"    : "abcdefghij"

}


```


#### Response

```http
  {
  "user": {
    "username": "abcd",
   (password is hashed)=> "password": "$2a$10$7eUtsHvYeknOKLbYVIH/eu/Z6lhqV6YXHOMxD7EhD9lklryySVkkm",
    "name": "udai",
    "phone": "abcdefghij",
    "_id": "6232cf88e3d1f48726d9be6d",
    "__v": 0
  }
}
```


## user-details show (using username)  api

#### Request

```http
  (POST request)

  localhost:5000/api/show/abcd(username)

```


#### Response

```http
  {
  "user": {
    "username": "abcd",
   (password is hashed)=> "password": "$2a$10$7eUtsHvYeknOKLbYVIH/eu/Z6lhqV6YXHOMxD7EhD9lklryySVkkm",
    "name": "udai",
    "phone": "abcdefghij",
    "_id": "6232cf88e3d1f48726d9be6d",
    "__v": 0
  }
}
```

## user-update  (using username)  api

#### Request

```http
  (PUT request)

  localhost:5000/api/update/abcd(username)

(things  you want to update) 

json body - >{
"password" : "helloworld010",
"name"     : "udai120",

"phone"    : "abcdefghik"

}

now to check the updated json body with username abcd:-

localhost:5000/api/show/abcd(username)(with POST request)

```


#### Response

```http
  updated 

{
  "detail": {
    "_id": "6232cf88e3d1f48726d9be6d",
    "username": "abcd",
    "password": "helloworld010",
    "name": "udai120",
    "phone": "abcdefghik",
    "__v": 0
  }
}






```

## user-delete  (using username)  api

#### Request

```http
  (DELETE request)

  localhost:5000/api/delete/abcd(username)



now to check if user with username "abcd" still exist or not :-

localhost:5000/api/show/abcd(username)(with POST request)

```


#### Response

```http
  deleted

{User with this username does not exist}


```








