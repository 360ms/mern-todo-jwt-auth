const Todo = require("../mongodb/models/Todo")
const { validationResult } = require("express-validator")

fetchTodos = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ message: errors })

    try {
        const { userId } = req.body

        await Todo.find({ userId }).then((todos) => res.json({ todos }))
    } catch (error) {
        return res.status(400).json({
            message: `[fetchTodos controller] ${error.message}`,
        })
    }
}

createTodo = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ message: errors })

    try {
        const { body } = req

        const newTodo = new Todo({ ...body })

        await newTodo.save().then(() => res.json({ todo: newTodo }))
    } catch (error) {
        return res.status(400).json({
            message: `[createTodo controller] ${error.message}`,
        })
    }
}

completeTodo = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ message: errors })

    try {
        const { id } = req.body

        await Todo.findByIdAndUpdate(id).then(async (todo) => {
            todo.completed = !todo.completed

            await todo.save()

            return res.json({
                message: "Todo completed!",
            })
        })
    } catch (error) {
        return res.status(400).json({
            message: `[completeTodo controller] ${error.message}`,
        })
    }
}

importantTodo = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ message: errors })

    try {
        const { id } = req.params

        await Todo.findByIdAndUpdate(id).then(async (todo) => {
            todo.important = !todo.important

            await todo.save()

            return res.json({
                message: "Todo set important!",
            })
        })
    } catch (error) {
        return res.status(400).json({
            message: `[importantTodo controller] ${error.message}`,
        })
    }
}

deleteTodo = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ message: errors })

    try {
        const { id } = req.params

        await Todo.findByIdAndDelete(id).then(() =>
            res.json({ message: "✔ Todo deleted!" })
        )
    } catch (error) {
        return res.status(400).json({
            message: `[deleteTodo controller] ${error.message}`,
        })
    }
}

module.exports = {
    fetchTodos,
    completeTodo,
    importantTodo,
    createTodo,
    deleteTodo,
}
