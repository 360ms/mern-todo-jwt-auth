const { Router } = require("express")
const { check } = require("express-validator")

const { register, login } = require("../controllers/auth.controller")

const router = Router()

router.post(
    "/register",
    [
        check("firstName", "Firstname field is required!"),
        check("lastName", "Lastname field is required!"),
        check("email", "Invalid email!").isEmail(),
        check("password", "Password field is required!").isLength({ min: 6 }),
    ],
    register
)

router.post(
    "/login",
    [
        check("email", "Invalid email!").isEmail(),
        check("password", "Password field is required!").isLength({ min: 6 }),
    ],
    login
)

module.exports = router
