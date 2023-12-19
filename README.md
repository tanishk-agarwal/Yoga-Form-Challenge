# Yoga-Form-Challenge
Here is the deployed link of the project: https://6581ef76254f0453efb870d1--coruscating-boba-df05c2.netlify.app/
Tech Stack Used:

Frontend:

React.js
TailwindCSS
Backend:

Node.js
Express.js
Mongoose.js
Database:

MongoDB Atlas
Approach:

Building the Frontend:

Develop the user input form using React JSX to collect data.
Implement a React Hooks function, completePayment(), triggered when the user clicks the subscribe (submit) button.
Within the function, use event.preventDefault() to prevent data submission until validation is complete.
Perform input validations to ensure the accuracy of user-provided data.
Utilize axios to make a call to the backend API for storing data in the database.
Building the Backend:

Import essential packages in Node.js and Express.js.
Adopt the Model-View-Controller (MVC) pattern for efficient data handling.
Establish URL routing to control the process of storing data in the database.
Leverage Mongoose.js to design the database schema and connect the application to MongoDB Atlas using a URL string.
Save the validated data in the MongoDB database.
Database Design:

Database Name: yogaDB

Collection Name: yogausers

Attributes:

Full Name (Type: String)
Age (Type: Number)
Date (Type: Date)
Amount (Type: Number)
Batch (Type: String)



