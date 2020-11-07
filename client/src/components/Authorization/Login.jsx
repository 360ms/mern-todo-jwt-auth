import React, { useEffect } from "react"

import { Form } from "antd"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { Field, Form as Former, Formik } from "formik"

import FullScreenImage from "../UI/FullScreenImage"
import { loginUser } from "../../redux/actions/authActions"
import { loginSchema } from "../../utils/validationSchemas"

const Login = ({ auth, history, loginUser }) => {
    useEffect(() => {
        if (auth.isAuthenticated) {
            history.push("/profile")
        }
    }, [auth.isAuthenticated, history])

    return (
        <FullScreenImage className="content-centered">
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={loginSchema}
                onSubmit={(values) => loginUser(values, history)}
            >
                {({ errors, touched }) => (
                    <Former className="form">
                        <h2 className="text-center">Login</h2>

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
                                Login
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

export default withRouter(connect(mapStateToProps, { loginUser })(Login))
