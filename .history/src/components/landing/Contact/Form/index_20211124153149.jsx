import React from "react"

const ContactForm = () => {

  return (

  <div className="formContainer">

  
  <form method="POST">
    <label htmlFor="name">Name</label>
    <input type="text" name="name"  className="formName" placeholder="your name..."/>

    <label htmlFor="email">Email</label>
    <input type="email" name="email"  className ="formEmail" placeholder="youremail@gmail.com" />

    <label htmlFor="message">Message</label>
    <textarea name="message" rows="3"></textarea>

    <input type="submit" />
  </form>
  </div>

  )
}

export default ContactForm
