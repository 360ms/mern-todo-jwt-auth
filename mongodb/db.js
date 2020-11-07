const mongoose = require("mongoose")

const { MONGO_URI } = require("../constants")

mongoose
    .connect(MONGO_URI, {
        useFindAndModify: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log(`Mongodb connected!`))
    .catch((error) =>
        console.log(`Mongodb connetion error => ${error.message}`)
    )

module.exports = mongoose.connection
