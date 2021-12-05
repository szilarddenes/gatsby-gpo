import React from "react";
import { Form, Field } from "react-final-form";
import { FormStyles } from "../styles"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const onSubmit = async (values) => {


    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));


};

const required = (value) => (value ? undefined : "Kötelező mező!");
const isValidEmail = (value) => {
    return /\S+@\S+\.\S+/.test(value) ? undefined : 'Érvénytelen e-mail cím!';
}

const mustBeNumber = (value) => (isNaN(value) ? "Szám mező!" : undefined);
const minValue = (min) => (value) =>
    isNaN(value) || value >= min ? undefined : `Legalább 9 számjegy szükséges!`;

const composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);

export default (props) => {
    let data = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    };

    return (



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

                    <Field name="email" validate={required, isValidEmail}>
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
                        onClick={form.reset}
                        disabled={submitting || pristine}
                    >
                        Reset
                    </button>

                    <pre>{JSON.stringify(values, 0, 2)}</pre>

                </form>
            )}
        />
    );
};
