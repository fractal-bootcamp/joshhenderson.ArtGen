// making api route to handle clerk webhooks 
//to handle: user.created, user.createdAtEdge, user.deleted, user.updated, 

//post request handler that takes a json object and checks if the event is one of the above
//if it is, it will update the db with the user id and user object

