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
import useMedia from "hooks/useMedia";



const HeroImage = loadable(() => import('./heroImage.jsx'))

export const Intro = () => {
  const { theme } = useContext(ThemeContext);
  const isDesktop = useMedia('(max-width: 960px)');
  return (
    
          {isDesktop ? <h1>Mobile</h1> : <h1>Desktop</h1>}
        <Wrapper>
          <Header />
          <IntroWrapper as={Container, HeroContainer}>
            <Details theme={theme} as={AbsoluteImage}>
              <FadeInRight>
                <h1 style={{'fontSize':'2rem'}}>Jogsi Kell?</h1>
                <h4 style={{'fontSize':'1.5rem'}}>Jelentkezz most! </h4>
              </FadeInRight>
              <FadeInLeft>
                <Button as={AnchorLink} to="#contact">
                  Hívás WhatsAppon!
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
