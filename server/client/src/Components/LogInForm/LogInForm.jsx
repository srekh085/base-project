import React from "react";
import LogInFormWrapper from "./Style/LoginFormWrapper";
import { useHistory } from "react-router-dom";
import { LogInSchema } from "../../Schema/LogIn";
import Name from "../../Static/Icons/Name.svg";
import Email from "../../Static/Icons/Email.svg";
import Password from "../../Static/Icons/Password.svg";
import Classcode from "../../Static/Icons/Classcode.svg";

import { Formik, Form, Field } from "formik";

export default ({ role, ...rest }) => {
  const history = useHistory();
  const handleTo = (to) => {
    history.push(to);
  };
  const getOtherRole = (currentRole) => {
    switch (currentRole) {
      case "admin":
        return "teacher";
      case "teacher":
        return "admin";
    }
  };
  if(role != "student"){
  return (
    <LogInFormWrapper>
      <h2>Log In to your {role} account</h2>
      <Formik
        validationSchema={LogInSchema}
        initialValues={{
          email: "",
          password: "",
          agree: false,
        }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        {({ errors, touched }) => (
          <Form>
            {/*email section*/}
            <section class="email">
              <section>
              <img src={Email} alt="email icon" />
              </section>
              <section>
                <label htmlFor="email">Email*</label>
                <br />
                <Field name="email" type="email" />
                {errors.email && touched.email ? <h6>{errors.email}</h6> : null}
              </section>
            </section>
            {/*end of email section*/}
            {/*password section*/}
            <section>
              <secion><img src={Password} alt="password icon" /></secion>
              <section>
                <label htmlFor="password">Password*</label>
                <br />
                <Field name="password" type="password" />
                {errors.classcode && touched.classcode ? (
                  <h6>{errors.classcode}</h6>
                ) : null}
              </section>
            </section>
            {/*end of password section*/}
            {/*password section*/}
            <section class="switcher">
              <div>
                <span
                  onClick={() =>
                    role === "teacher"
                      ? handleTo("/login/admin")
                      : handleTo("/login/teacher")
                  }
                >
                  Log in as {getOtherRole(role)} instead!
                </span>
              </div>
              {errors.agree && touched.agree ? <h6>{errors.agree}</h6> : null}
            </section>

            <button type="login">Log In</button>
          </Form>
        )}
      </Formik>
    </LogInFormWrapper>
  );}
  return(
    <LogInFormWrapper>
      <h2>Log in as {role}</h2>
      <Formik
        validationSchema={LogInSchema}
        initialValues={{
          firstName: "",
          lastName: "",
          classcode: "",
          agree: false,
        }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        {({ errors, touched }) => (
          <Form>
            {/*name section*/}
            <section class="name">
              <section>
              <img src={Name} alt="name icon" />
              </section>
              <section>
                <label htmlFor="firstName">First Name*</label>
                <br />
                <Field name="firstName" />
                {errors.firstName && touched.firstName ? (
                  <h6>{errors.firstName}</h6>
                ) : null}
              </section>
              <section>
                <label htmlFor="lastName">Last Name*</label>
                <br />
                <Field name="lastName" />
                {errors.lastName && touched.lastName ? (
                  <h6>{errors.lastName}</h6>
                ) : null}
              </section>
            </section>
            {/*end of name section*/}
            {/*Classcode section*/}
            <section>
              <section><img src={Classcode} alt="Classcode Icon" /></section>
              <section>
                <label htmlFor="password">Class Code*</label>
                <br />
                <Field name="password" type="password" />
                {errors.classcode && touched.classcode ? (
                  <h6>{errors.classcode}</h6>
                ) : null}
              </section>
            </section>
            {/* <section></section> */}
            {/*end of Classcode section*/}
            {errors.agree && touched.agree ? <h6>{errors.agree}</h6> : null}
            <button type="register">Log In</button>
          </Form>
        )}
      </Formik>
    </LogInFormWrapper>
  )
};
