import Axios from "axios"

export const setAuthToken = (token) =>
    token
        ? (Axios.defaults.headers.common["Authorization"] = token)
        : delete Axios.defaults.headers.common["Authorization"]
