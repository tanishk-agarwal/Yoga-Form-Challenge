# Yoga-Form-Challenge
Here is the deployed link of the project: https://6581ef76254f0453efb870d1--coruscating-boba-df05c2.netlify.app/
## Tech Stack Used

**Frontend:**
- React.js
- TailwindCSS

**Backend:**
- Node.js
- Express.js
- Mongoose.js

**Database:**
- MongoDB Atlas

---

## Approach

### Building the Frontend

1. Develop the user input form using React JSX to collect data.
2. Implement a React Hooks function, `completePayment()`, triggered when the user clicks the subscribe (submit) button.
3. Within the function, use `event.preventDefault()` to prevent data submission until validation is complete.
4. Perform input validations to ensure the accuracy of user-provided data.
5. Utilize axios to make a call to the backend API for storing data in the database.

### Building the Backend

1. Import essential packages in Node.js and Express.js.
2. Adopt the Model-View-Controller (MVC) pattern for efficient data handling.
3. Establish URL routing to control the process of storing data in the database.
4. Leverage Mongoose.js to design the database schema and connect the application to MongoDB Atlas using a URL string.
5. Save the validated data in the MongoDB database.

---

## Database Design

**Database Name:** `yogaDB`

**Collection Name:** `yogausers`

**Attributes:**
1. Full Name (*Type: String*)
2. Age (*Type: Number*)
3. Date (*Type: Date*)
4. Amount (*Type: Number*)
5. Batch (*Type: String*)
