
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name not provided."],
  },
  address: {
    type: String,
    required: [true, "Address not provided."],
  },
  nationality: {
    type: String,
    required: [true, "Nationality not provided"],
  },
  email: {
    type: String,
    unique: [true, "E-mail already exists."],
    lowercase: true,
    trim: true,
    required: [true,
      "E-mail field is required.",
    ],
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: "{VALUE} is not a valid e-mail.",
    },
  },
  phone: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        return /^\d{11}/.test(v);
      },
      message: "{VALUE} is not a valid number.",
    },
  },
});

module.exports = mongoose.model("Client", clientSchema);