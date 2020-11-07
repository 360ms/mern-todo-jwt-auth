const { Router } = require("express")
const { check } = require("express-validator")

const {
    fetchTodos,
    createTodo,
    deleteTodo,
    completeTodo,
    importantTodo,
} = require("../controllers/todo.controller")

const router = Router()

// POST
router.post("/", [check("userId", "UserID field is required!")], fetchTodos)
router.post("/create", [check("label", "Label field is required!")], createTodo)
router.post("/complete", [check("id", "ID field is required!")], completeTodo)
router.post("/important/:id", importantTodo)

// DELETE
router.delete("/delete/:id", deleteTodo)

module.exports = router
