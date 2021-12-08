import React, { useContext } from "react"
import { Form, Field } from "react-final-form"
import { FormStyles, Center, Error } from "../styles"
import { Button } from "components/common"
import { ThemeContext } from "providers/ThemeProvider"

import axios from "axios"
import { v4 as uuidv4 } from "uuid"

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  let id = uuidv4()
  values.id = id

  let data = {
    id: id,
    name: values.firstName,
    lastName: values.lastName,
    email: values.email,
    phone: values.phone,
    category: values.kategoria,
    message: values.message,
  }
//   values.sent = true

  axios
    .post("https://solidgarden.tricky.ro/api/v1/gpo-mail/post", data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "X-API-KEY": "keytomailGPO",
      },
    })
    .then(res => {
      console.log("Form Succesfully Submited 🎉🎉🎉")
      values.firstName = ""
      values.lastName = ""
      values.email = ""
      values.phone = ""
      values.kategoria = ""
      values.message = ""
      values.sent = true
    })
    .catch(() => {
      console.log("error on client side, message not sent.")
    })
}

const required = value => (value ? undefined : "Kötelező mező!")

const isValidEmail = value =>
  validateEmail(value) ? undefined : "Érvénytelen e-mail cím!"

const validateEmail = value => {
  if (value) {
    return value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  } else {
    return
  }
}

const mustBeNumber = value =>
  isNaN(value) ? "Csak számjegyek bevitele megengedett!" : undefined

const minValue = min => value =>
  isNaN(value) || value >= min ? undefined : `Legalább 9 számjegy szükséges!`

const composeValidators =
  (...validators) =>
  value =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    )

export default props => {
  const { theme } = useContext(ThemeContext)
  let data = {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    kategoria: "B",
    message: "",
    sent: false,
  }

  return (
    <FormStyles className="FormContainer" theme={theme}>
      <Form
        theme={theme}
        onSubmit={onSubmit}
        initialValues={data}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} theme={theme}>
            <Field name="firstName" validate={required}>
              {({ input, meta }) => (
                <>
                  {/* <label>Utónév</label> */}
                  <div>
                    <input
                      {...input}
                      type="text"
                      placeholder="Utónév"
                      className={meta.error && meta.touched ? "redBorder" : ""}
                    />
                    {meta.error && meta.touched && <Error>{meta.error}</Error>}
                  </div>
                </>
              )}
            </Field>

            <Field name="lastName" validate={required}>
              {({ input, meta }) => (
                <>
                  {/* <label>Last Name</label> */}
                  <div>
                    <input
                      {...input}
                      type="text"
                      placeholder="Vezetéknév"
                      className={meta.error && meta.touched ? "redBorder" : ""}
                    />
                    {meta.error && meta.touched && <Error>{meta.error}</Error>}
                  </div>
                </>
              )}
            </Field>

            <Field
              name="email"
              validate={(required, validateEmail, isValidEmail)}
            >
              {({ input, meta }) => (
                <>
                  {/* <label>Email cím</label> */}
                  <div>
                    <input
                      {...input}
                      type="text"
                      placeholder="Email"
                      className={meta.error && meta.touched ? "redBorder" : ""}
                    />
                    {meta.error && meta.touched && <Error>{meta.error}</Error>}
                  </div>
                </>
              )}
            </Field>

            <Field
              name="phone"
              validate={composeValidators(
                required,
                mustBeNumber,
                minValue(99999999)
              )}
            >
              {({ input, meta }) => (
                <>
                  {/* <label>Telefonszám</label> */}
                  <div>
                    <input
                      {...input}
                      type="phone"
                      placeholder="Telefonszám (+40)"
                      className={meta.error && meta.touched ? "redBorder" : ""}
                    />
                    {meta.error && meta.touched && <Error>{meta.error}</Error>}
                  </div>
                </>
              )}
            </Field>

            {/* <label>Érdekelt kategória</label> */}
            <Field name="kategoria" component="select">
              <>
                <option value="B">B kategória</option>
                <option value="COD96">COD96 kategória</option>
                <option value="BE">BE kategóra</option>
              </>
            </Field>

            <Field name="message" validate={required}>
              {({ input, meta }) => (
                <>
                  {/* <label>Üzenet</label> */}
                  <div>
                    <textarea
                      {...input}
                      type="textarea"
                      placeholder=" Üzenet..."
                      className={`formTextarea ${
                        meta.error && meta.touched ? "redBorder" : ""
                      }`}
                      rows="10"
                    />
                    {meta.error && meta.touched && <Error>{meta.error}</Error>}
                  </div>
                </>
              )}
            </Field>

            <Center>
              <Button type="submit" disabled={submitting}>
                📬 Beküldés
              </Button>
            </Center>

            <Center>
              <div className={values.sent ? "formSentSuccess" : "formSentMsg"}>
                <mark> Sikeres üzenet küldés! </mark> <span> 🎉 </span> <br />{" "}
                <mark> Hamarosan jelentkezünk!</mark> <span>🚕</span>
              </div>
            </Center>

            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </FormStyles>
  )
}
