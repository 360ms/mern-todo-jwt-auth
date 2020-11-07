require("dotenv").config()

module.exports = {
    MONGO_URI: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mern-todo",
    PORT: process.env.PORT || 9000,
    SECRET: process.env.SECRET || "superSecretString",
}
