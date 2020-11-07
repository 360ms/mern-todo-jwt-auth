import * as types from "../types"
import { isEmpty } from "lodash"

const INITIAL_STATE = {
    isAuthenticated: false,
    user: {},
    loading: false,
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload,
            }

        default:
            return state
    }
}

export default authReducer
