const { Schema, model } = require("mongoose")

const requiredString = {
    type: String,
    required: true,
}

const User = new Schema({
    firstName: requiredString,

    lastName: requiredString,

    email: requiredString,

    password: requiredString,

    created: {
        type: Date,
        default: Date.now,
    },
})

module.exports = model("users", User)
