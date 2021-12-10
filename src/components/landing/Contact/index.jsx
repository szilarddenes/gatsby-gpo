import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Details,MapStyleParent, MapStyle } from './styles';
import loadable from '@loadable/component'


const ContactFormR = loadable(() => import('./FormR/index.jsx'))

const LeafletMap = loadable(()=> import('./LeafletMap/index.jsx'))


const Contact=()=>(
  <Wrapper as={Container} id="contact" >
    <Details>
    <h1 >Kapcsolat</h1>
    <ContactFormR/>
    </Details>


    <Details style={{paddingRight:'0'}}>
    <MapStyleParent>
    <MapStyle>
        <LeafletMap
          position={[46.30311,25.29428]}
          zoom={8}
          markerText={"Hello, this is a marker"}
        />
    </MapStyle>
    </MapStyleParent>
    </Details>
   
  </Wrapper>
);

export default Contact;