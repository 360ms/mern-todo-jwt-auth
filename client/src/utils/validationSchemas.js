import * as Yup from "yup"

// AUTH
export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email!")
        .required("Email field is required!"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters!")
        .required("Password field is required!"),
})
export const registerSchema = Yup.object().shape({
    firstName: Yup.string().required("Firstname field is required!"),
    lastName: Yup.string().required("Lastname field is required!"),
    email: Yup.string()
        .email("Invalid email!")
        .required("Email field is required!"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters!")
        .required("Password field is required!"),
})

// TODO
export const createTodoSchema = Yup.object().shape({
    label: Yup.string().required("Label field is required!"),
})
