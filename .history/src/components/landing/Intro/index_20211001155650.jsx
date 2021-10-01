import React, { useContext } from 'react'
import { Header } from "components/theme";
import { Container,Button } from "components/common";
import { Thumbnail, BorderedImage, Details,Wrapper, IntroWrapper, BckgImgStyle } from "./styles";
import loadable from "@loadable/component"


import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import FadeInRight from "hooks/fadeInRight";
import FadeInLeft from "hooks/fadeInLeft";
import { ThemeContext } from "providers/ThemeProvider";
import BackgroundImage from "gatsby-background-image"



const HeroImage = loadable(() => import('./heroImage.jsx'))

export const Intro = () => {
  return (

    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
       
      
        <HeroImage />
      </IntroWrapper>
      <pre>

        git commit -m 'optim 21 @loadable .babelrc Contact form test'

      </pre>
    </Wrapper>

  );
};



