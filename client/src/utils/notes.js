/**
 *! Set up instructions
 * ? RUN npm install in the root directory to install dependencies. Do not create any react apps or install any other dependencies for this project.
 * TODO note that the server.js file has the API. Documentation on how to interact with the API is included in this file. 
 * ? RUN npm start to get API up and running on local host 5000.
 * ? cd into the client directory
 * ? RUN npm install inside of the client directory to install dependencies. 
 * ? RUN npm start to fire up the react app
 * 
 * ! Authentication: 
 * * 1. Construct an axios request to retrieve a token to interact with the API. This wil go in the login form page. 
 * 
 * * 2. Save the token to local storage.
 * 
 * * 3. Build a axiosWithAuth module to create an instance of axios with the authentication header.
 * 
 * * 4. Build a PrivateRoute component, use it to protect the page that renders the 'BubblesPage' component. The bubbles component is already built. 
 * 
 * ! Consuming the API: 
 * * 5. When the BubblesPage renders make a GET request to fetch the color data for the bubbles. We should have used the PivateRoute component with the bubbles component. 
 * 
 * * 6. In ColorList.js finish making the saveEdit, and deleteColor functions to make an AJAX request to the API data. 
 */