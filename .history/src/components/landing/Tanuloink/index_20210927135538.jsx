import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import imgTanuloink from 'assets/illustrations/dev.svg'; // graphql in later
import { Wrapper, TanuloinkWrapper, Details, Thumbnail } from './styles';

const Tanuloink = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="tanuloink">
      <TanuloinkWrapper as={Container}>
        <Thumbnail>
          <img src={imgTanuloink} alt="Pállfy Gáspár Csaba autósiskola rólam" max-width="100%" max-height="100%" width="100%" height="100%"/>
        </Thumbnail>
       
      </TanuloinkWrapper>
    </Wrapper>
  );
};

export default Tanuloink