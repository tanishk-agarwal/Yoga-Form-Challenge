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

**Database Name:** `cluster0`

**Collection Name:** `users`

**Attributes:**
1. Full Name (*Type: String*)
2. DOB (*Type: Date*)
3. Email(*Type:String*) 
4. Batch (*Type: String*)

**Registration**
![Screenshot from 2023-12-20 01-24-35](https://github.com/tanishk-agarwal/Yoga-Form-Challenge/assets/88491381/d26ad0c2-786f-4ffc-9217-b3d179af6ebe)

**Payment success**
![Screenshot from 2023-12-20 01-26-40](https://github.com/tanishk-agarwal/Yoga-Form-Challenge/assets/88491381/0b14120e-8214-4525-9e00-ef1d4a6d34b8)

**Update Branch**
![Screenshot from 2023-12-20 01-27-21](https://github.com/tanishk-agarwal/Yoga-Form-Challenge/assets/88491381/9332aeb6-1966-44c5-a7b0-8c0ee5ef4eff)

**User Database**

![photo1703016531](https://github.com/tanishk-agarwal/Yoga-Form-Challenge/assets/88491381/3fe5b6d5-3884-42c9-9581-5825e734f68b)
**Registration Database**

![photo1703016531 (1)](https://github.com/tanishk-agarwal/Yoga-Form-Challenge/assets/88491381/d384a63e-a4f1-460e-bb1e-6271c375f8da)
**Payment Database**

![photo1703016531 (2)](https://github.com/tanishk-agarwal/Yoga-Form-Challenge/assets/88491381/c5cf2c32-8086-4fbb-8e2b-6e89862ba629)
