import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    roomName: String,
    userID: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel',
    },
});

export const roomModel = mongoose.model("Room", roomSchema);
