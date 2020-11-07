import React, { useEffect } from "react"

import { Form } from "antd"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { Field, Form as Former, Formik } from "formik"

import FullScreenImage from "../UI/FullScreenImage"
import { registerUser } from "../../redux/actions/authActions"
import { registerSchema } from "../../utils/validationSchemas"

const Register = ({ auth, history, registerUser }) => {
    useEffect(() => {
        if (auth.isAuthenticated) {
            history.push("/profile")
        }
    }, [auth.isAuthenticated, history])

    return (
        <FullScreenImage className="content-centered">
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                }}
                validationSchema={registerSchema}
                onSubmit={(values) => registerUser(values, history)}
            >
                {({ errors, touched }) => (
                    <Former className="form">
                        <h2 className="text-center">Register</h2>

                        <Form.Item>
                            <Field
                                name="firstName"
                                placeholder="Firstname"
                                className="ant-input"
                            />
                            {errors.firstName && touched.firstName && (
                                <span className="ant-form-item-extra error-text">
                                    {errors.firstName}
                                </span>
                            )}
                        </Form.Item>

                        <Form.Item>
                            <Field
                                name="lastName"
                                placeholder="Lastname"
                                className="ant-input"
                            />
                            {errors.lastName && touched.lastName && (
                                <span className="ant-form-item-extra error-text">
                                    {errors.lastName}
                                </span>
                            )}
                        </Form.Item>

                        <Form.Item>
                            <Field
                                name="email"
                                placeholder="Email"
                                className="ant-input"
                            />
                            {errors.email && touched.email && (
                                <span className="ant-form-item-extra error-text">
                                    {errors.email}
                                </span>
                            )}
                        </Form.Item>

                        <Form.Item>
                            <Field
                                type="password"
                                name="password"
                                placeholder="********"
                                className="ant-input"
                            />
                            {errors.password && touched.password && (
                                <span className="ant-form-item-extra error-text">
                                    {errors.password}
                                </span>
                            )}
                        </Form.Item>

                        <Form.Item>
                            <button
                                className="ant-btn ant-btn-primary"
                                type="submit"
                            >
                                Register
                            </button>
                        </Form.Item>
                    </Former>
                )}
            </Formik>
        </FullScreenImage>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default withRouter(connect(mapStateToProps, { registerUser })(Register))
