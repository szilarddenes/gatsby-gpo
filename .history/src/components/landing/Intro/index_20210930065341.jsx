import React, { useContext } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { ThemeContext } from "providers/ThemeProvider";
import { Header } from "components/theme";
import { Container, Button } from "components/common";
import { Wrapper, IntroWrapper, Details } from "./styles";



const Tanuloink = loadable(() => import('../components/landing/Tanuloink/index.jsx'))

export const Intro = () => {
  const { theme } = useContext(ThemeContext);



  return (
    
        <Wrapper>
          <Header />
          <IntroWrapper as={Container}>
            <Details theme={theme}>
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

          </IntroWrapper>
        </Wrapper>
     
  );
};



