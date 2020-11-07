import React from "react"

import { Tooltip } from "antd"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import {
    HomeOutlined,
    LoginOutlined,
    LogoutOutlined,
    UserAddOutlined,
    UserOutlined,
} from "@ant-design/icons"

import { logoutUser } from "../../../redux/actions/authActions"

const tooltipPos = window.innerWidth <= 720 ? "bottom" : "right"

const LinksList = ({ auth, logoutUser }) => (
    <>
        <NavLink to="/">
            <Tooltip placement={tooltipPos} title="Home">
                <HomeOutlined />
            </Tooltip>
        </NavLink>

        <div className="menu-bottom">
            {!auth.isAuthenticated ? (
                <>
                    <NavLink to="/register">
                        <Tooltip placement={tooltipPos} title="Registration">
                            <UserAddOutlined />
                        </Tooltip>
                    </NavLink>

                    <NavLink to="/login">
                        <Tooltip placement={tooltipPos} title="Login">
                            <LoginOutlined />
                        </Tooltip>
                    </NavLink>
                </>
            ) : (
                <>
                    <NavLink to="/profile">
                        <Tooltip placement={tooltipPos} title="Profile">
                            <UserOutlined />
                        </Tooltip>
                    </NavLink>

                    <NavLink to="/" onClick={logoutUser}>
                        <Tooltip placement={tooltipPos} title="Logout">
                            <LogoutOutlined />
                        </Tooltip>
                    </NavLink>
                </>
            )}
        </div>
    </>
)

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser })(LinksList)
