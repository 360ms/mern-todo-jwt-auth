import thunk from "redux-thunk"
import { applyMiddleware, createStore } from "redux"

import reducer from "./reducers"

export const store = createStore(reducer, applyMiddleware(thunk))
