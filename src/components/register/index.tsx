// import React from 'react'
// import { useState, useEffect } from "react"
import IUser from "../../interfaces/user.interfaces";
import Schema from "./schema";
import axios from "axios";
import { Formik, Form, Field, FormikProps } from "formik";

function Register() {

    const postUser = async (params : IUser) => {
        try {
            await axios.post(
                "https://66fd3bb8c3a184a84d1990b9.mockapi.io/api/v1/users" , {
                    firstName : params.firstName,
                    lastName : params.lastName,
                    email : params.email,
                    phoneNumber : params.phoneNumber,
                    password : params.password,                   
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <h1>Register</h1>

        <div>
            <Formik 
            initialValues={{
                id : 0,
                firstName :"",
                lastName : "",
                phoneNumber : 0,
                email : "",
                password : "",
            }}
            
            
            validationSchema = {Schema}

            onSubmit={(values) => {
                console.log(values);
                postUser(values);
            }}


            >

                {(props : FormikProps<IUser>) =>{
                    const {values, errors, touched, handleChange} = props;
                    
                    return (
                        <Form>
                            <div>
                                <label htmlFor="firstName">First Name :</label>
                                <Field 
                                    type="text"
                                    name="firstName"
                                    onChange={handleChange}
                                    values = {values.firstName}
                                />
                                {touched.firstName && errors.firstName ? (
                                    <div>{errors.firstName}</div>
                                ) : null}
                            </div>

                            <div>
                                <label htmlFor="lastName">Last Name :</label>
                                <Field 
                                    type="text"
                                    name="lastName"
                                    onChange={handleChange}
                                    values = {values.lastName}
                                />
                                {touched.lastName && errors.lastName ? (
                                    <div>{errors.lastName}</div>
                                ) : null}
                            </div>

                            <div>
                                <label htmlFor="email">Email :</label>
                                <Field 
                                    type="text"
                                    name="email"
                                    onChange={handleChange}
                                    values = {values.email}
                                />
                                {touched.email && errors.email ? (
                                    <div>{errors.email}</div>
                                ) : null}
                            </div>

                            <div>
                                <label htmlFor="phoneNumber">Phone Number :</label>
                                <Field 
                                    type="text"
                                    name="phoneNumber"
                                    onChange={handleChange}
                                    values = {values.phoneNumber}
                                />
                                {touched.phoneNumber && errors.phoneNumber ? (
                                    <div>{errors.phoneNumber}</div>
                                ) : null}
                            </div>

                            <div>
                                <label htmlFor="password">Password :</label>
                                <Field 
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    values = {values.password}
                                />
                                {touched.password && errors.password ? (
                                    <div>{errors.password}</div>
                                ) : null}
                            </div>

                            <button type="submit">Save</button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    </div>
  )
}

export default Register;