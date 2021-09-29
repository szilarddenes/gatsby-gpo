import React, { useContext } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useStaticQuery, graphql } from "gatsby"
import { ThemeContext } from "providers/ThemeProvider";
import { Header } from "components/theme";
import { Container, Button } from "components/common";
import { Wrapper, IntroWrapper, Details, Thumbnail, BorderedImage } from "./styles";
import FadeInRight from "hooks/fadeInRight";
import FadeInLeft from "hooks/fadeInLeft";
import introImg from "assets/illustrations/hero-main.png"     
import BackgroundImage from "gatsby-background-image"



export const Intro = () => {
  const { theme } = useContext(ThemeContext);


  const data = useStaticQuery(graphql`
  query{
      indexImage:file(relativePath:{
          eq:"hero-main.png"
      }){
          childImageSharp{
              fluid(maxWidth:1800){
                  ...GatsbyImageSharpFluid
              }
          }
      },
      
  }
  `);

  return (
    <BackgroundImage
            className="hero-main"
            fluid={data.indexImage.childImageSharp.fluid}
            fadeIn
          >
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
        <Thumbnail>
        <FadeInLeft>
          <BorderedImage>
          <img src={introImg} alt="intro img" max-width="100%" max-height="100%" width="100%" height="100%" />
          </BorderedImage >
        </FadeInLeft>
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
    </BackgroundImage>
  );
};

