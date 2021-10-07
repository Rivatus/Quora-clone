# Quora-clone

It is a web-project designed to implement basic functionalities of quora-app. It aims at replicating only essential features 
such that it will be a question-answer platform where anyone can read and post or upvote the answer (By logging in). 
The front-end is designed using react-framework and backend is made using nodejs. 

## Setting up the project on local. 
Ensure that nodejs is setup in your computer before running these steps. [Download here](https://nodejs.org/en/)
1. git clone the repository. 
2. Split terminal into two windows and change to cd to `client` and `server` repository respectively.  
2. npm install dependency in both folders. By typing `npm install`.   
3. Run `npm start` at both terminal.


# Front-end code Structure: 
 -  [`index.js`](https://github.com/sg60692/Quora-clone/blob/master/client/src/index.js) is the starting point of client side. It contains just the boiler-plate code, the actual beginning is at [`App.js`](https://github.com/sg60692/Quora-clone/blob/master/client/src/App.js)
 -  All Components are in the [Components folder](https://github.com/sg60692/Quora-clone/tree/master/client/src/Components)
 - `Navbar` Component is at the beggining. The URL path decide the further rendered component. 
 -  The Connection with backend is implemented through the [api folder](https://github.com/sg60692/Quora-clone/tree/master/client/src/api)
 -  The project uses redux library, the [action folder](https://github.com/sg60692/Quora-clone/tree/master/client/src/actions) is thus used to dispatch actions and [reducers folder](https://github.com/sg60692/Quora-clone/tree/master/client/src/reducers) is for reducer functions. 

# Back-end code Structure: 
  - [`index.js`](https://github.com/sg60692/Quora-clone/blob/master/server/index.js) is the start of the server-side. 
  - The [route folder](https://github.com/sg60692/Quora-clone/tree/master/server/route) contains the routes that back-end support. 
  - The [models folder](https://github.com/sg60692/Quora-clone/tree/master/server/models) contains the mongoDB model of questions/answers/users. 
  - The [Controller folder](https://github.com/sg60692/Quora-clone/tree/master/server/Controller) contains the back-end logic for interacting with database, receiving and sending response to incoming requests. 


