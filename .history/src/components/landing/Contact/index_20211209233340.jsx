import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import loadable from '@loadable/component'
import LeafletMap from './LeafletMap'

const ContactFormR = loadable(() => import('./FormR/index.jsx'))

// const LeafletMap = loadable(()=> import('./LeafletMap/index.jsx'))


const Contact=()=>(
  <Wrapper as={Container} id="contact" >
    <Details>
    <h2 >Kapcsolat</h2>
    <ContactFormR/>
    </Details>
    <Thumbnail>
        <LeafletMap
          position={[52,-0.5]}
          zoom={8}
          markerText={"Hello, this is a marker"}
        />
    </Thumbnail>
   
  </Wrapper>
);

export default Contact;