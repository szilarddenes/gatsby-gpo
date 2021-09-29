import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

const Contact = () => (
  <Wrapper as={Container}id="contact"   >
    <Details>
    <h2 >Kapcsolat</h2>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m John and I’m a Backend & Devops engineer!" max-width="100%" max-height="100%" width="100%" height="100%" />
    </Thumbnail>
   
  </Wrapper>
);

export default Contact;