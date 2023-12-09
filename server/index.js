import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from './routes/users.js'
import { roomRouter } from "./routes/rooms.js";

const app = express();

// Add middleware
app.use(cors());
app.use(express.json());

app.use("/auth", userRouter, roomRouter)


mongoose.connect("mongodb+srv://adilbadat3:Password123@wedding.a8tcxea.mongodb.net/wedding?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);


// Define your routes and other application logic here

app.listen(3001, () => {
    console.log('Running fghj on port 3001');
});
