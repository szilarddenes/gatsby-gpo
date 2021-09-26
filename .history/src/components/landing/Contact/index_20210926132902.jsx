import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

function Contact() {
  return (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m John and I’m a Backend & Devops engineer!" />
    </Thumbnail>
  </Wrapper>
  )
);

export default Contact

import React from 'react'

export default function index() {
  return (
    <div>
      
    </div>
  )
}
