import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"
import { getClientConfig } from "../utils/helpers"
import rootReducer from "./reducers"

const config = getClientConfig()
const env = config.env
console.log(env)
const withDevTools = middleware => (env === "dev" ? composeWithDevTools(middleware) : middleware)

export function initializeStore(initialState = {}) {
  return createStore(rootReducer, initialState, withDevTools(applyMiddleware(thunkMiddleware)))
}
