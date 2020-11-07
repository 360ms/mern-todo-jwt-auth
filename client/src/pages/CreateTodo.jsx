import React from "react"

import { Col, Row } from "antd"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { Field, Form as Former, Formik } from "formik"
import { createTodo } from "../redux/actions/todoActions"

import FullScreenImage from "../components/UI/FullScreenImage"
import { createTodoSchema } from "../utils/validationSchemas"

const CreateTodo = ({ auth, history, createTodo }) => (
    <FullScreenImage className="content-centered">
        <Formik
            initialValues={{ label: "" }}
            validationSchema={createTodoSchema}
            onSubmit={(values) =>
                createTodo({ ...values, userId: auth.user._doc._id }, history)
            }
        >
            {({ errors, touched }) => (
                <Former className="form">
                    <h2 className="text-center">Create Todo</h2>

                    <Row>
                        <Col span={24}>
                            <Field
                                name="label"
                                placeholder="Task..."
                                className="ant-input"
                            />
                            {errors.label && touched.label && (
                                <span className="ant-form-item-extra error-text">
                                    {errors.label}
                                </span>
                            )}
                        </Col>
                    </Row>

                    <div className="create-todo-controls">
                        <button
                            className="ant-btn ant-btn-text delete-button"
                            type="button"
                            onClick={history.goBack}
                        >
                            Cancel
                        </button>

                        <button
                            className="ant-btn ant-btn-primary ml-1"
                            type="submit"
                        >
                            Create
                        </button>
                    </div>
                </Former>
            )}
        </Formik>
    </FullScreenImage>
)

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default withRouter(connect(mapStateToProps, { createTodo })(CreateTodo))
