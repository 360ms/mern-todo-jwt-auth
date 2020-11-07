const express = require("express")
const cors = require("cors")

const authRoutes = require("./routes/auth.routes")
const todoRoutes = require("./routes/todo.routes")
const { PORT } = require("./constants")
require("./mongodb/db")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/auth", authRoutes)
app.use("/api/todo", todoRoutes)

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

app.listen(PORT, () =>
    console.log(`✔ The server has running on PORT => ${PORT}`)
)
