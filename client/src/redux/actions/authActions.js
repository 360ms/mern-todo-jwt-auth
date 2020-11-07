import Axios from "axios"
import * as types from "../types"
import jwt_decode from "jwt-decode"

import { message } from "antd"
import { setAuthToken } from "../../utils/setAuthToken"

export const registerUser = async (data, history) => {
    await Axios.post("/api/auth/register", data)
        .then(() => {
            history.push("/login")
            message.success({ content: "User created!" })
        })
        .catch((error) => message.error(error.response.data.message))
}

export const loginUser = (data) => async (dispatch) => {
    await Axios.post("/api/auth/login", data)
        .then((res) => {
            const { token } = res.data

            localStorage.setItem("token", token)

            setAuthToken(token)

            const decoded = jwt_decode(token)
            dispatch(setCurrentUser(decoded))

            message.success({ content: `Welcome, ${decoded._doc.firstName}!` })
        })
        .catch((error) => message.error(error.response.data.message))
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem("token")

    setAuthToken(false)

    dispatch(setCurrentUser({}))
}

//Action Generators
export const setCurrentUser = (payload) => ({
    type: types.SET_CURRENT_USER,
    payload,
})
