import React from "react"
import Avatar from "antd/lib/avatar/avatar"

import { Col, Row } from "antd"
import { connect } from "react-redux"
import { UserOutlined } from "@ant-design/icons"

import TodoContainer from "../components/Todo/TodoContainer"
import FullScreenImage from "../components/UI/FullScreenImage"

const Profile = ({ auth }) => (
    <FullScreenImage className="text-center">
        <Row>
            <Col span={24}>
                <Avatar className="avatar" size={100} icon={<UserOutlined />} />
            </Col>

            <Col span={24}>
                <h2>{`Welcome, ${auth.user._doc.firstName} ${auth.user._doc.lastName}`}</h2>
            </Col>
        </Row>

        <Row>
            <Col span={24} className="todos">
                <TodoContainer />
            </Col>
        </Row>
    </FullScreenImage>
)

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(Profile)
