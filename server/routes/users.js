// Import necessary packages and modules
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../models/users.js";

// Create an instance of an Express router
const router = express.Router();

// Define a route for user registration
router.post("/register", async (req, res) => {
    // Extract user data from the request body
    const { firstName, lastName, password } = req.body;

    // Extract email from the request body and check if a user with that email already exists
    const { email } = req.body;
    const userEmail1 = await userModel.findOne({ email });

    // If a user with the same email exists, return a "User already exists" message
    if (userEmail1) {
        return res.json({ message: "User already exists." });
    }

    // Hash the provided password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document with the provided data
    const newUser = new userModel({ firstName, lastName, email, password: hashedPassword });

    // Save the new user to the database
    await newUser.save();

    // Return a success message indicating that the user was created
    return res.json({ message: "User created" });
});


// Define a route for user registration
router.post("/login", async (req, res) => {
    // Extract user data from the request body
    const { email, password } = req.body;
    // const user = new userModel(req.body);

    const user = await userModel.findOne({ email });


    // If user doesnt exist, retrun 'user doesnt exist'
    if (!user) {
        return res.json({ message: "User doesn't exist" });
    }

    // Hash the provided password for security
    const isPasswordValid = await bcrypt.compare(password, user.password);



    if (!isPasswordValid) {
        return res.json({ message: "User password not valid" });
    }

    const token = jwt.sign({ id: user._id }, "secret")

    // // Create a new user document with the provided data
    // const checkUserLoggedIn = new userModel({ email, isPasswordValid });
    // if (checkUserLoggedIn) {
    //     return res.json({ message: "User logged in" });
    // }


    // Return a success message indicating that the user was created
    return res.json({ token, userID: user._id });
});

// Define a route for user login (currently empty)

// Export the router as "userRouter" to be used in other parts of your application
export { router as userRouter };
