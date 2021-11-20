import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import { Wrapper, TanuloinkWrapper, Details, Thumbnail } from './styles';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Slider from './slider'

const Tanuloink = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container} id="tanuloink" >
      <h1>Tanulóink</h1>

      <TanuloinkWrapper>
        <Details theme={theme} >
          <div>
            <h3>Ők már minket választottak</h3>
            <p>
            Az elmúlt évek során több mint xxx-an választották #GPO autósiskolát,  néhányukkal itt is megismerkedhettek.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In reiciendis illo vero quia obcaecati earum maiores ipsa, perferendis ut adipisci corporis, blanditiis molestiae esse deserunt eos, ab maxime repudiandae laudantium.
            </p>

            <Button as={AnchorLink} to="#contact" >
              Jelentkezz
            </Button>
        </Details>
        <Thumbnail>
          < Slider></Slider>
        </Thumbnail>
      </TanuloinkWrapper>
    </Wrapper>
  );
};

export default Tanuloink