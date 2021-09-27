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
        <Details theme={theme}>
          <h1>Rólunk</h1>
          <p>
          Pálfi Gáspár Csaba vagyok, több mint 10 éve oktatok B kategóriában, az évek során dolgoztam már udvarhelyszéki autós iskolának is, jelenleg pedig magánvállalkozóként saját autókkal oktatok. 
          A #GPO autósiskolában a B kategória mellett, COD96 és BE kategóriás képzéseken is részt vehetsz.  Ha minket választasz, a minőségi oktatás mellett segítünk a ügyintézés minden fázisában, irodánkban lehetőséget biztosítunk az elméleti vizsgára való gyakorlásra is.
          </p>
          <Button as={AnchorLink} href="#contact">
            Jelentkezz
          </Button>
        </Details>
      </TanuloinkWrapper>
    </Wrapper>
  );
};

export default Tanuloink