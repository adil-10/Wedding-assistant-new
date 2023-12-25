import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    roomName: { type: String, required: true, unique: true },
    creationDate: { type: Date, default: Date.now },
    createdBy: { type: String },
    tasks: [{ tasks: String }],
    users: [{ userID: String }],
});

export const roomModel = mongoose.model("Room", roomSchema);