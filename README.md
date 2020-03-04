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
{
	"value_id": "11",
	"top_three": true
}

* DELETE /api/values/delete/:id - (detaches value from user)
>SEND: value_id


* GET api/values/user/:id - (Gets Values for User)
>RETURNS: value_Id, value_name, value_description, user_id, top_three, user_description

***

### The following endpoints are available for **PROJECTS Router**
##### These endpoints require a token for authentication


* GET /api/projects - (list all projects for that user)
> RETURNS: list of projects

* POST api/projects - (adds project for that user)

>SEND:  
{
	"name": "another test project",
	"description": "test description"
}

> RETURNS: id of the project created

* PUT api/projects - (edits project for that user)

>SEND:  
{
	"id": "3" (id of project)
	"name": "edited name",
	"description": "edited description"
}

> RETURNS: 1 if successfully edited, 0 if failed;

* DELETE api/projects - (deletes a project for that user)

>SEND:  
{
	"project_id": "10"
}

> RETURNS: 1 (if successful)


* POST api/projects/value - (attaches value to project)

>SEND:  
{
	project_id: 3,
	values_id: 1,
}

* PUT api/projects/value - (edits value to project relevance)

>SEND:  
{
	project_id: 3,
	values_id: 1,
	relevant: true
}

* DELETE api/projects/value - (Removed value from project)

>SEND:  
{
	project_id: 3,
	values_id: 1
}

