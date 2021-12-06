import React from "react";
import { Form, Field } from "react-final-form";
import { FormStyles } from "../styles"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const onSubmit = async (values) => {

    let id = uuidv4()
    values.id = id
    // values.sent=true
    
    // await sleep(300);
    // window.alert(JSON.stringify(values, 0, 2));

    let data = {
        id: id,
        name: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        category:values.kategoria,
        message: values.message,
      }

    axios.post('https://solidgarden.tricky.ro/api/v1/gpo-mail/post', data,{
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'X-API-KEY': 'keytomailGPO', 
          }
      })
    .then((res) => {
        values.sent=true
        // this.resetForm()
        window.alert(JSON.stringify(values, 0, 2));
      console.log('Form Succesfully Submited 🎉🎉🎉')
    })
    .catch(() => {
      console.log("error on client side, message not sent.")
    })
   
};

const required = (value) => (value ? undefined : "Kötelező mező!");

const isValidEmail = (value) => (validateEmail(value)) ? undefined : 'Érvénytelen e-mail cím!'

const validateEmail = (value) => {
    if (value) {

        return value.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    }
    else {
        return
    }
}

const mustBeNumber = (value) => (isNaN(value) ? "Csak számjegyek bevitele megengedett!" : undefined);

const minValue = (min) => (value) =>
    isNaN(value) || value >= min ? undefined : `Legalább 9 számjegy szükséges!`;

const composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);

export default (props) => {
    let data = {
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        kategoria:'B',
        message: '',
        sent: false,
    };

    return (

        <FormStyles className="FormContainer">

            <Form
                onSubmit={onSubmit}
                initialValues={data}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>

                        <Field name="firstName" validate={required}>
                            {({ input, meta }) => (
                                <>
                                    <label>Utónév</label>
                                    <div>
                                        <input {...input} type="text" placeholder="First Name" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                </>
                            )}
                        </Field>

                        <Field name="lastName" validate={required}>
                            {({ input, meta }) => (
                                <>
                                    <label>Last Name</label>
                                    <div>
                                        <input {...input} type="text" placeholder="Vezetéknév" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                </>
                            )}
                        </Field>

                        <Field name="email" validate={required, validateEmail, isValidEmail}>
                            {({ input, meta }) => (
                                <>
                                    <label>Email cím</label>
                                    <div>
                                        <input {...input} type="text" placeholder="emailcímed@gmail.com" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                </>
                            )}
                        </Field>

                        <Field
                            name="phone"
                            validate={composeValidators(required, mustBeNumber, minValue(99999999))}
                        >
                            {({ input, meta }) => (
                                <>
                                    <label>Telefonszám</label>
                                    <div>
                                        <input {...input} type="phone" placeholder="+40" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                </>
                            )}
                        </Field>

                        <label>Érdekelt kategória</label>
                        <Field name="kategoria" component="select">
                            <option value="B">B</option>
                            <option value="COD96">COD96 Green</option>
                            <option value="BE">BE</option>
                        </Field>

                        <Field
                            name="message"
                            validate={required}

                        >
                            {({ input, meta }) => (
                                <>
                                    <label>Üzenet</label>
                                    <div>
                                        <input {...input} type="textarea" placeholder="..." rows="20" className="formTextarea" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                </>
                            )}
                        </Field>

                        <button
                            type="submit"
                            disabled={submitting}
                            
                        >
                            Submit
                        </button>

                        <button
                            type="button"
                            disabled={submitting || pristine}
                           onClick={form.reset}
                        >
                            Reset
                        </button>

                        <div className={values.sent ? 'formSentSuccess' : 'formSentMsg'}>Message has been sent.</div>

                        <pre>{JSON.stringify(values, 0, 2)}</pre>

                    </form>
                )}
            />
        </FormStyles>
    );
};
