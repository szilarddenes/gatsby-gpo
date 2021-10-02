
import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Header } from "components/theme";
import { Container } from "components/common";
import {
  Wrapper, IntroWrapper, Details, HeroContainer,
  AbsoluteImage
} from "./styles";
import FadeInRight from "hooks/fadeInRight";
import FadeInLeft from "hooks/fadeInLeft";
import useMedia from "hooks/useMedia";
import JogsiKell from "./JogsiKell";
import Jelentkezz from "./Jelentkezz"
import WhatsApp from "./WhatsApp"
import IntroContact from "./IntroContact"
import loadable from '@loadable/component'



const HeroImage = loadable(() => import('./HeroImg/heroImage.jsx'))
const HeroImageMob  = loadable(() => import('./HeroImg/heroImageMobile.jsx'))

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
                <JogsiKell style={{ 'color': '#fff' }} />
                <Jelentkezz style={{ color: '#fff' }} />
              </FadeInRight>
              <FadeInLeft>
                <WhatsApp />
              </FadeInLeft>
            </Details>
            <HeroImage />
          </IntroWrapper>
        </Wrapper>

        :
        <>
          <Header />
          <IntroWrapper as={Container}>
            <Details theme={theme}></Details>
            <FadeInRight>
              <JogsiKell />
            </FadeInRight>
            <FadeInLeft>
            <IntroContact />
            </FadeInLeft>
            <HeroImageMob />
            <FadeInRight>
              <Jelentkezz />
            </FadeInRight>
            <FadeInLeft>
                <WhatsApp />
              </FadeInLeft>
          </IntroWrapper>
        </>
      }
    </>
  );
};