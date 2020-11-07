import Axios from "axios"
import { message } from "antd"

import * as types from "../types"

export const getTodos = (userId) => async (dispatch) => {
    await Axios.post("/api/todo", { userId })
        .then((res) => dispatch(getTodosAction(res.data.todos)))
        .catch((error) => message.error(error.response.data.message))
}

export const createTodo = (label, history) => async (dispatch) => {
    await Axios.post("/api/todo/create", label)
        .then((res) => {
            message.success("Todo created!")
            dispatch(createTodoAction(res.data.todo))
            history.push("/profile")
        })
        .catch((error) => message.error(error.response.data.message))
}

export const completeTodo = (id) => async (dispatch) => {
    await Axios.post("/api/todo/complete", { id })
        .then(() => dispatch(completeTodoAction(id)))
        .catch((error) => message.error(error.response.data.message))
}

export const deleteTodo = (id) => async (dispatch) => {
    await Axios.delete(`/api/todo/delete/${id}`)
        .then(() => dispatch(deleteTodoAction(id)))
        .catch((error) => message.error(error.response.data.message))
}

export const setImportantTodo = (id) => async (dispatch) => {
    await Axios.post(`/api/todo/important/${id}`)
        .then(() => dispatch(setImportantTodoAction(id)))
        .catch((error) => message.error(error.response.data.message))
}

//Action Generators
export const deleteTodoAction = (id) => ({
    type: types.REMOVE_TODO,
    id,
})

export const setImportantTodoAction = (id) => ({
    type: types.IMPORTANT_TODO,
    id,
})

export const getTodosAction = (payload) => ({
    type: types.SET_TODOS,
    payload,
})

export const createTodoAction = (payload) => ({
    type: types.CREATE_TODO,
    payload,
})

export const completeTodoAction = (id) => ({
    type: types.COMPLETE_TODO,
    id,
})
