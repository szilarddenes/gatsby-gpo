import React, { Component } from "react"
import { FormStyles } from "../styles"
import axios from "axios"

export default class ContactForm extends Component {
  state = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    sent: false,
  }

  //handle inputs
  handleName = e => {
    this.setState({
      name: e.target.value,
    })
  }
  handleLastName = e => {
    this.setState({
      lastName: e.target.value,
    })
  }
  handleEmail = e => {
    this.setState({
      email: e.target.value,
    })
  }
  handlePhone = e => {
    this.setState({
      phone: e.target.value,
    })
  }
  handleMessage = e => {
    this.setState({
      message: e.target.value,
    })
  }
  //end handle inputs

  formSubmit = (e) => {
    e.preventDefault()

    let data = {
      name: this.state.name,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
    }

    axios.post("http://localhost:8888/apiMail", data)
    .then((res) => {
        this.setState(
          {
            sent: true,
          },
          this.resetForm()
        )
      })
      .catch(() => {
        console.log("error on client side, message not sent.")
      })
      .then(()=>{
        console.log('at the end of POST request')
      })
  }

  //reset form
  resetForm = () => {
    this.setState({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    })
    setTimeout(() => {
      this.setState({
        sent: false,
      })
    }, 3000)
  }

  render() {
    return (
      <FormStyles className="FormContainer">
        <form onSubmit={this.formSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="formName"
            placeholder="your name..."
            value={this.state.name}
            onChange={this.handleName}
          />

          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="formLastName"
            placeholder="your last name..."
            value={this.state.lastName}
            onChange={this.handleLastName}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="formEmail"
            placeholder="youremail@gmail.com"
            value={this.state.email}
            onChange={this.handleEmail}
          />

          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            name="phone"
            className="formPhone"
            placeholder="+40 "
            value={this.state.phone}
            onChange={this.handlePhone}
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="15"
            className="formTextarea"
            placeholder="type your message.."
            value={this.state.message}
            onChange={this.handleMessage}
          ></textarea>

          {/* success message */}
          <div className={this.state.sent ? 'formSentSuccess' : 'formSentMsg' }>Message has been sent.</div>

          <button type="submit"> Send Email </button>
        </form>
      </FormStyles>
    )
  }
}
