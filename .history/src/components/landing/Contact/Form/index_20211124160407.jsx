import React, {state} from "react"
import {FormStyles} from "../styles"

const ContactForm = () => {
  state={
    name:'',
    lastName:'',
    email:'',
    phone:'',
    message:'',
    sent:false,
  }


  //handle inputs
handleName=(e)=>{
  
}

  //end handle inputs


  return (

  <FormStyles className="FormContainer">

  
  <form method="POST">
    <label htmlFor="name">Name</label>
    <input type="text" name="name"  className="formName" placeholder="your name..."/>

    <label htmlFor="lastname">Last Name</label>
    <input type="text" name="lastName"  className="formLastName" placeholder="your last name..."/>

    <label htmlFor="email">Email</label>
    <input type="email" name="email"  className ="formEmail" placeholder="youremail@gmail.com" />
   
    <label htmlFor="phone">Phone</label>
    <input type="phone" name="phone"  className ="formPhone" placeholder="+40 " />

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
