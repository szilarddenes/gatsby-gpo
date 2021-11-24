import React from "react"
import {FormStyles} from "../styles"

const ContactForm = () => {
  state={
    name:''
  }

  return (

  <FormStyles className="FormContainer">

  
  <form method="POST">
    <label htmlFor="name">Name</label>
    <input type="text" name="name"  className="formName" placeholder="your name..."/>

    <label htmlFor="email">Email</label>
    <input type="email" name="email"  className ="formEmail" placeholder="youremail@gmail.com" />

    <label htmlFor="message">Message</label>
    <textarea name="message" rows="15" className="formTextarea" placeholder="type your message..">

    </textarea>
    <div className="formSentMsg">Message has been sent.</div>
    <button type="submit"> Send Email </button>
  </form>
  </FormStyles>

  )
}

export default ContactForm
