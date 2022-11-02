
import mongoose from "mongoose";

const roomSchema = new Schema({
    type: {
        type: String,
        enum: ["Single", "Double", "Family", "Presidential"],
        required: [true, "Type not provided."],
    },
    number: {
        type: Number,
        required: [true, "Number not provided."],
    },
    adapted: {
        type: Boolean,
        default: false,
    },
    hotel: {
        type: Number,
    },
});

module.exports = mongoose.model("Room", roomSchema);