# Essentialism - Backend

***

URL: https://buildweek-essentialism.herokuapp.com/



***  

### The following endpoints are available for **USERS ROUTER**

#### Register (also signs them in)
* POST /api/users/register
> SEND: email, password, name

> RETURNS: id, message, token

#### Login
* POST /api/users/login
> SEND: email, password, name

> RETURNS: email and token

#### USERS (this endpoint will be removed for final project)
* GET /api/users/
> Returns all users

#### DELETE
* DELETE /api/users/:id

> RETURNS: `User {:id} successfully deleted`

***

### The following endpoints are available for **Values Router**
##### These endpoints require a token for authentication


* GET /api/values - (list all values)
> RETURNS: id, name, description of all values

* GET api/values/:id - (gets value by id)
> RETURNS: id, name, description of value specified by id

* POST api/values - (adds a value)
> SEND: name, description(optional)

> RETURNS: ID of created value

* POST /api/values/user/:id - (attaches value to user)
>SEND: value_id, description(optional)

>RETURNS: value_id, description

* PUT /api/values/user/:id - (Updates value for user)
>SEND: value_id, description(optional), top_three(true or false -optional)


* POST /api/values/delete/:id - (detaches value from user)
>SEND: value_id


* GET api/values/user/:id - (Gets Values for User)
>RETURNS: Value_Id, Value_name, Value_description, User_id, Top_Three, User_Description

***

