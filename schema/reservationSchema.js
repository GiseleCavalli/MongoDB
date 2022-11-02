
import mongoose, { Schema } from "mongoose";

const reservationSchema = new Schema({
    id: {
      type: int,
      required: true,
    },
    data: {
      type: data,
    },
    canceled: {
      type: Boolean,
      default: false,
    },
    room: {
      type: Schema.Types.ObjectId,
      ref: "Room",
      required: [true, "Room not found."],
    },
    employee: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: [true, "Employee not found."],
    },
    consumption: {
      type: Number,
    },
    client: {
      type: Schema.Types.ObjectId,
      ref: "Client",
      required: [true, "Client not found."],
    },
});

module.exports = mongoose.model("Reservation", reservationSchema);