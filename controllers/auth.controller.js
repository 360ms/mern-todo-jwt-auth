const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const { validationResult } = require("express-validator")

const User = require("../mongodb/models/User")
const { SECRET } = require("../constants")

register = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ message: errors })

    try {
        const { email, password } = req.body

        await User.findOne({ email }).then(async (user) => {
            if (user)
                return res.status(400).json({
                    message: "Email already exists!",
                })

            const hashed = await bcrypt.hash(password, 12)

            const newUser = new User({ ...req.body, password: hashed })

            await newUser
                .save()
                .then(() => res.json({ message: "✔ User created!" }))
        })
    } catch (error) {
        return res.status(400).json({
            message: `[register controller] ${error.message}`,
        })
    }
}

login = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ message: errors })

    try {
        const { email, password } = req.body

        await User.findOne({ email }).then(async (user) => {
            if (!user)
                return res.status(404).json({
                    message: "User not found!",
                })

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch)
                return res.status(404).json({
                    message: "User not found!",
                })

            const token = jwt.sign({ ...user }, SECRET, { expiresIn: 900 })

            return res.json({
                token,
                message: `Welcome, ${user.firstName}`,
            })
        })
    } catch (error) {
        return res.status(400).json({
            message: `[login controller] ${error.message}`,
        })
    }
}

module.exports = {
    register,
    login,
}
