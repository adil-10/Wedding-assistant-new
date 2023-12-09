// Import necessary packages and modules
import express from "express";
import { roomModel } from "../models/rooms.js";

// Create an instance of an Express router
const router = express.Router();

// Define a route for room creation
router.post("/createRoom", async (req, res) => {
    // Extract user data from the request body
    const { roomName, userID } = req.body;
    // Extract email from the request body and check if a user with that email already exists
    const roomName1 = await roomModel.findOne({ roomName });

    // If a user with the same email exists, return a "User already exists" message
    if (roomName1) {
        return res.json({ message: "Room name already exists. Please enter a different room name." });
    }

    // Create a new user document with the provided data
    const newRoom = new roomModel({ roomName, userID });

    // Save the new user to the database
    await newRoom.save();

    // Return a success message indicating that the user was created
    return res.json({ message: "Room created" });
});

router.get("/viewRoom", async (req, res) => {
    try {
        // Retrieve all users from the database
        const roomName = await UserModel.find({});

        // Send the users as JSON in the response
        res.json(roomName);
    }

    catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Export the router as "userRouter" to be used in other parts of your application
export { router as roomRouter };
