# FeedRestful
A simple RESTFul Api for Feeds built using NodeJS, Express and MongoDB. 
Built for local testing with Android Applications. This server application could be used with [Android Application Architecture Talk from Android Dev Summit, 2015](https://www.youtube.com/watch?v=BlkJzgjzL0c).

## Server Setup

* Install NodeJS and NPM (Node Package Manager) from [here](https://nodejs.org/en/download/). The NodeJS comes with NPM.
* Install MongoDB from [here](https://docs.mongodb.com/manual/installation/).

### How to use?
* Clone the repository
* npm install
* npm start and it will start the server at 127.0.0.1:2508/

### Api EndPoints

**/feeds**
* GET : Get list of all the feeds
* POST : Post feed

**/feeds/:feedId**
* GET : Get a feed with given ${feedId}
* DELETE : Delete a feed with given ${feedId}

Happy Coding!
