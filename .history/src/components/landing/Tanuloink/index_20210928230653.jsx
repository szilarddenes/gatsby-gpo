import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import imgTanuloink from 'assets/illustrations/dev.svg'; // graphql in later
import { Wrapper, TanuloinkWrapper, Details, Thumbnail } from './styles';

const Tanuloink = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container} >
      <TanuloinkWrapper>
      <Details theme={theme}>
          <h1>Ők már minket választottak</h1>
          <p>
          Az elmúlt évek során több mint xxx-an választották #GPO autósiskolát,  néhányukkal itt is megismerkedhettek.
          </p>
          <p>
          Az elmúlt évek során több mint xxx-an választották #GPO autósiskolát,  néhányukkal itt is megismerkedhettek.
          </p>
          <Button href="#contact">
            Jelentkezz
          </Button>
        </Details>
        <Thumbnail>
          <img src={imgTanuloink} alt="Pállfy Gáspár Csaba autósiskola rólam" max-width="100%" max-height="100%" width="100%" height="100%"/>
        </Thumbnail>
      </TanuloinkWrapper>
    </Wrapper>
  );
};

export default Tanuloink