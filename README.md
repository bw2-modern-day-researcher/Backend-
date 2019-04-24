
//	USER ENDPOINTS

POST req for registering a user - /api/register - It requires a username and password, an email is also accepted but not required, and it sends a token once registered

POST req  for logging in a user - /api/login - It requires a username and password, an email is also accepted but not required, and it sends a token once log in is verified

GET req to see individual user - /api/user/:id  - Allows front end access to each user by their ID

GET req to retrieve each users posts - /api/post/:username 

GET req to - api/logout - logs out user 

------------------------------------------------

//	ARTICLE ENDPOINTS

GET req to see posts by users (on feed) - /api/post - Filtered so they will only get if the 'public' key is set to true

POST req to add a link card to the feed - /api/post/create - requires a title, category,& link and if seen & public are true or false. We also accept a imgURL, description, and username as optional inputs

DELETE req to delete a article - api/post/delete/:id - use id of post to delete it

PUT req to update a article - /api/post/update/:id - requires a title, category,& link and if seen & public are true or false to be able to update. We also accept a imgURL, description, and username as optional inputs

