import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"
import { getConfig } from "next/config"

const config = getConfig()
const env = config.publicRuntimeConfig.env
const withDevTools = middleware => (env === "dev" ? composeWithDevTools(middleware) : middleware)

export function initializeStore(initialState = exampleInitialState) {
  return createStore(reducer, initialState, withDevTools(applyMiddleware(thunkMiddleware)))
}
