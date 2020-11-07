import React, { useEffect } from "react"
import jwt_decode from "jwt-decode"

import { connect } from "react-redux"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Profile from "../pages/Profile"
import Navbar from "./UI/Navbar/Navbar"
import HomePage from "../pages/HomePage"
import Login from "./Authorization/Login"
import CreateTodo from "../pages/CreateTodo"
import Register from "./Authorization/Register"
import PrivateRoute from "../utils/PrivateRoute"

import { store } from "../redux/store"
import { setAuthToken } from "../utils/setAuthToken"
import { logoutUser, setCurrentUser } from "../redux/actions/authActions"
import { getTodos } from "../redux/actions/todoActions"

if (localStorage.token) {
    const token = localStorage.getItem("token")
    setAuthToken(token)

    const decoded = jwt_decode(token)
    store.dispatch(setCurrentUser(decoded))

    if (decoded.exp < Date.now() / 1000) {
        store.dispatch(logoutUser())

        window.location.href = "/profile"
    }
}

const App = ({ auth, getTodos }) => {
    useEffect(() => {
        auth.isAuthenticated && getTodos(auth.user._doc._id)
    }, [auth, getTodos])

    return (
        <div>
            <Router>
                <Navbar />

                <Route exact path="/" component={HomePage} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />

                <Switch>
                    <PrivateRoute exact path="/profile" component={Profile} />
                    <PrivateRoute exact path="/create" component={CreateTodo} />
                </Switch>
            </Router>
        </div>
    )
}

const mapStateToProps = (state) => ({ auth: state.auth })

export default connect(mapStateToProps, { getTodos })(App)
