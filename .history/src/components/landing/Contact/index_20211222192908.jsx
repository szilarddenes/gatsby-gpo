import React, { useContext } from 'react';
import { Container } from 'components/common';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, Details, MapStyleParent, MapStyle } from './styles';
import loadable from '@loadable/component'


const ContactFormR = loadable(() => import('./FormR/index.jsx'))

const LeafletMap = loadable(() => import('./LeafletMap/index.jsx'))


const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container} id="contact" >
      <Details theme={theme} >
        <h1 >Kapcsolat</h1>
        <ContactFormR />
      </Details>


      <Details style={{ paddingRight: '0', zindex:'1' }} theme={theme} >
        <MapStyleParent>
          <MapStyle>
            <LeafletMap
              position={[46.30311, 25.29428]}
              zoom={8}
              markerText={"Hello, this is a marker"}
            />
          </MapStyle>
        </MapStyleParent>
      </Details>

    </Wrapper>
  )
};

export default Contact;