# LABUGUEN-Stage-3
Stage 3: Database Connection
In this stage, I connected my Express app to a MySQL server and showed my favorite programming language(s) by performing database operations.

## Instructions
1. Connect your express application to a MySQL server. 
2. Create a database/schema called ‘sysdev_recruitment' (Comment the query you used on creating the database/schema).
3. Inside the specified database/schema, create a table called `programming_languages` with the following columns (Comment the query you used on creating the table):
    1. id INT NOT NULL AUTOINCREMENT (Primary Key)
    2. favorites VARCHAR(255)

1. Insert the value of the ‘favorite’ query parameter to the table.
    1. Here is a sample URL: `http://localhost:3000/programming-language/new?favorite=Javascript`
  
## Running the Application
To run the Node.js application, have the Express module and MySQL installed. 
You can install it by running the following command in your project's directory:
npm install express mysql
node appsql.js

After running the above command, you should see a message indicating that the application runs on port 3000. 
You can then visit the provided URL, ex: (http://localhost:3000/programming-language/new?favorite=Javascript) to insert your favorite programming language into the database.

🚀👾
