import { object, string } from "yup";

const Schema = object({
    firstName : string()
    .min(3, "First name must be at least 3 characters") 
    .max(10, "First Name cannot be more than 10 characters")
    .required("Required"),

    lastName : string()
    .min(3, "First name must be at least 3 characters") 
    .max(10, "First Name cannot be more than 10 characters")
    .required("Required"),

    email : string()
    .email("Invalid Format")
    .required("Required"),

    password : string()
    .min(3, "Password must be 3 characters")
    .matches(/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/,
        "Password need to have at least 1 number, and special characters"
    )
    .required("Required")
});

export default Schema;