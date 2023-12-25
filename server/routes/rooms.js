// // WORKING

// // Import necessary packages and modules
// import express from "express";
// import { roomModel } from "../models/rooms.js";

// // Create an instance of an Express router
// const router = express.Router();

// // Define a route for room creation
// router.post("/createRoom", async (req, res) => {
//     // Extract user data from the request body
//     const { roomName, userID } = req.body;

//     // Check if a room with the same name already exists
//     const roomName1 = await roomModel.findOne({ roomName });

//     // If a room with the same name exists, return a message
//     if (roomName1) {
//         return res.json({ message: "Room name already exists. Please enter a different room name." });
//     }

//     // Create a new room document with the provided data
//     const newRoom = new roomModel({ roomName, createdBy: userID, users: [{ userID }] });

//     // Save the new room to the database
//     await newRoom.save();

//     // Return a success message indicating that the room was created
//     return res.json({ message: "Room created" });
// });



// // Define a route for joining a room
// router.patch("/joinRoom", async (req, res) => {
//     // Extract user data from the request body
//     const { roomName, userID } = req.body;


//     // Check if the room exists based on what the user entered
//     const checkRoom = await roomModel.findOne(
//         { roomName },
//     );

//     // If the user is already in the room, return a message
//     const checkUserInRoom = await roomModel.findOne(
//         { roomName, "users.userID": userID },

//     );
//     //If room name entered is invalid 
//     if (!checkRoom) {
//         return res.json("Enter a valid room name")
//     }

//     //If the user is already in the room
//     else if (checkUserInRoom) {
//         return res.json({ message: "User is already in the room." });
//     }

//     else {

//         // Update the room document to add the user to the users array
//         const update = { $push: { users: { userID } } };

//         // Options for the findOneAndUpdate method
//         const options = { new: true };

//         // Find and update the room based on the room name
//         const updatedRoom = await roomModel.findOneAndUpdate({ roomName }, update, options);

//         // Save the updated room to the database
//         await updatedRoom.save();

//         // Return a success message indicating that the room was updated
//         return res.json({ message: "Room updated" });
//     }
// });



// // Define a route for viewing rooms based on a user's ID
// router.get("/viewRoom/:userID", async (req, res) => {
//     try {
//         const userID = req.params.userID;

//         // Retrieve all rooms from the database based on the user's ID
//         const roomName = await roomModel.find({ "users.userID": userID });

//         // Send the rooms as JSON in the response
//         res.json(roomName);
//     } catch (error) {
//         // Handle errors
//         console.error(error);
//     }
// });

// // Export the router as "roomRouter" to be used in other parts of your application
// export { router as roomRouter };





// Import necessary packages and modules
import express from "express";
import { roomModel } from "../models/rooms.js";

// Create an instance of an Express router
const router = express.Router();

// Define a route for room creation
router.post("/createRoom", async (req, res) => {
    // Extract user data from the request body
    const { roomName, userID } = req.body;

    // Check if a room with the same name already exists
    const roomName1 = await roomModel.findOne({ roomName });

    // If a room with the same name exists, return a message
    if (roomName1) {
        return res.json({ message: "Room name already exists. Please enter a different room name." });
    }

    // Create a new room document with the provided data
    const newRoom = new roomModel({ roomName, createdBy: userID, users: [{ userID }] });

    // Save the new room to the database
    await newRoom.save();

    // Return a success message indicating that the room was created
    return res.json({ message: "Room created" });
});



// Define a route for joining a room
router.patch("/joinRoom", async (req, res) => {
    // Extract user data from the request body
    const { roomName, userID } = req.body;


    // Check if the room exists based on what the user entered
    const checkRoom = await roomModel.findOne(
        { roomName },
    );

    // If the user is already in the room, return a message
    const checkUserInRoom = await roomModel.findOne(
        { roomName, "users.userID": userID },

    );
    //If room name entered is invalid 
    if (!checkRoom) {
        return res.json("Enter a valid room name")
    }

    //If the user is already in the room
    else if (checkUserInRoom) {
        return res.json({ message: "User is already in the room." });
    }

    else {

        // Update the room document to add the user to the users array
        const update = { $push: { users: { userID } } };

        // Options for the findOneAndUpdate method
        const options = { new: true };

        // Find and update the room based on the room name
        const updatedRoom = await roomModel.findOneAndUpdate({ roomName }, update, options);

        // Save the updated room to the database
        await updatedRoom.save();

        // Return a success message indicating that the room was updated
        return res.json({ message: "Room updated" });
    }
});



// Define a route for viewing rooms based on a user's ID
router.get("/viewRoom/:userID", async (req, res) => {
    try {
        const userID = req.params.userID;

        // Retrieve all rooms from the database based on the user's ID
        const roomName = await roomModel.find({ "users.userID": userID });

        // Send the rooms as JSON in the response
        res.json(roomName);
    } catch (error) {
        // Handle errors
        console.error(error);
    }
});

// Define a route for viewing rooms based on a user's ID
router.get("/viewSingleRoom/:roomName", async (req, res) => {
    try {
        const roomName = req.params.roomName;
        const { userID, tasks } = req.body;


        // Retrieve all rooms from the database based on the user's ID
        // const roomName = await roomModel.find({ "users.userID": userID });

        // Send the rooms as JSON in the response
        res.json(roomName);
    } catch (error) {
        // Handle errors
        console.error(error);
    }
});

//Adding Tasks
// /singleMovie/:movie_id

// Export the router as "roomRouter" to be used in other parts of your application
export { router as roomRouter };
