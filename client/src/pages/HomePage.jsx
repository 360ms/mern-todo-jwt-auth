import React from "react"
import { connect } from "react-redux"

import { NavLink } from "react-router-dom"

import FullScreenImage from "../components/UI/FullScreenImage"

const HomePage = ({ auth }) => (
    <FullScreenImage className="content-centered">
        <h1>Welcome to Todosss</h1>

        <div>
            {auth.isAuthenticated ? (
                <NavLink
                    to="/profile"
                    className="ant-btn ant-btn-primary"
                    type="primary"
                >
                    Profile
                </NavLink>
            ) : (
                <>
                    <NavLink
                        to="/register"
                        className="ant-btn ant-btn-primary"
                        type="primary"
                    >
                        Register
                    </NavLink>
                    <NavLink
                        to="/login"
                        className="ml-1 ant-btn ant-btn-primary"
                        type="primary"
                    >
                        Login
                    </NavLink>
                </>
            )}
        </div>
    </FullScreenImage>
)

const mapStateToProps = (state) => ({ auth: state.auth })

export default connect(mapStateToProps)(HomePage)
