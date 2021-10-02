import React, { useContext } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { ThemeContext } from "providers/ThemeProvider";
import { Header } from "components/theme";
import { Container, Button } from "components/common";
import { Wrapper, IntroWrapper, Details, HeroContainer,
  AbsoluteImage } from "./styles";
import FadeInRight from "hooks/fadeInRight";
import FadeInLeft from "hooks/fadeInLeft";
import loadable from '@loadable/component'



const HeroImage = loadable(() => import('./heroImage.jsx'))

export const Intro = () => {
  const { theme } = useContext(ThemeContext);
  return (
    
        <Wrapper>
          <Header />
          <IntroWrapper as={Container, HeroContainer}>
            <div as={ HeroContainer}>

            </div>
            <Details theme={theme} as={AbsoluteImage}>
              <FadeInRight>
                <h1>Jogsi Kell?</h1>
                <h4>Jelentkezz most sofőrsulinkba!</h4>
              </FadeInRight>
              <FadeInLeft>
                <Button as={AnchorLink} to="#contact">
                  Jelentekezz
                </Button>
              </FadeInLeft>
            </Details>

          <HeroImage />
          </IntroWrapper>
          <pre>
            
            git commit -m 'Hero using static image with text overflow'

          </pre>
        </Wrapper>
     
  );
};


// export default Intro
