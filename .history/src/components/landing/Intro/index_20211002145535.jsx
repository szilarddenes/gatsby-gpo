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
import JogsiKell from "./JogsiKell";



const HeroImage = loadable(() => import('./heroImage.jsx'))

export const Intro = () => {
  const { theme } = useContext(ThemeContext);
  const isDesktop = useMedia('(min-width: 960px)');
  return (
    <>
    {isDesktop ?  
    <Wrapper>
          <Header />
          <IntroWrapper as={Container, HeroContainer}>
            <Details theme={theme} as={AbsoluteImage}>
              <FadeInRight>
                <JogsiKell />
                <Jelentkezz 
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

: <h1>Mobile 💩</h1>}
     </>
  );
};


// export default Intro
