import { combineReducers } from "@reduxjs/toolkit"

import auth from "./auth"
import users from "./users"

import login from "./login"
import register from "./register"

const reducers = combineReducers({
    users,
    auth,

    login,
    register,
})

export default reducers
