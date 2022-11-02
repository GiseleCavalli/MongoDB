
import mongoose from "mongoose";

const employeeSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name not provided."],
  },
  jobPosition: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);