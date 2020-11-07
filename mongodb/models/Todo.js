const { Schema, model } = require("mongoose")

const defaultBool = {
    type: Boolean,
    default: false,
}

const Todo = new Schema({
    label: {
        type: String,
        required: true,
    },

    completed: defaultBool,

    important: defaultBool,

    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },

    created: {
        type: Date,
        default: Date.now,
    },
})

module.exports = model("todos", Todo)
