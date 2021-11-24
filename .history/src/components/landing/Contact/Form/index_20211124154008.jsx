import React from "react"
import {Form} from "../styles"

const ContactForm = () => {

  return (

  <div className="formContainer">

  
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
  </div>

  )
}

export default ContactForm
