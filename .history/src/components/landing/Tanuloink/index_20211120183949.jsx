import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import imgTanuloink from 'assets/illustrations/dev.svg'; // graphql in later
import { Wrapper, TanuloinkWrapper, Details, Thumbnail } from './styles';
import { AnchorLink } from "gatsby-plugin-anchor-links";
// import Slider from './slider'

const Tanuloink = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container} id="tanuloink" >
      <TanuloinkWrapper>
      <Details theme={theme}>
          <h1 >Ők már minket választottak</h1>
          <p>
          Az elmúlt évek során több mint xxx-an választották #GPO autósiskolát,  néhányukkal itt is megismerkedhettek.
          </p>
          <p>
          Az elmúlt évek során több mint xxx-an választották #GPO autósiskolát,  néhányukkal itt is megismerkedhettek.
          </p>
          <Button as={AnchorLink} to="#contact" >
            Jelentkezz
          </Button>
        </Details>
        <Thumbnail>
          {/* < Slider></Slider> */}
        </Thumbnail>
      </TanuloinkWrapper>
    </Wrapper>
  );
};

export default Tanuloink