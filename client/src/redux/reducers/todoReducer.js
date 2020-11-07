import * as types from "../types"

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case types.SET_TODOS:
            return action.payload

        case types.CREATE_TODO:
            return [...state, action.payload]

        case types.COMPLETE_TODO:
            return state.map((item) =>
                item._id === action.id
                    ? { ...item, completed: !item.completed }
                    : item
            )

        case types.REMOVE_TODO:
            return state.filter((todo) => todo._id !== action.id)

        case types.IMPORTANT_TODO:
            return state.map((item) =>
                item._id === action.id
                    ? { ...item, important: !item.important }
                    : item
            )

        default:
            return state
    }
}

export default todoReducer
