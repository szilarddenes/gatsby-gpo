import React, { useContext } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useStaticQuery, graphql } from "gatsby"
import { ThemeContext } from "providers/ThemeProvider";
import { Header } from "components/theme";
import { Container, Button } from "components/common";
import { Wrapper, IntroWrapper, Details, Thumbnail, BorderedImage, BckgImgStyle } from "./styles";
import FadeInRight from "hooks/fadeInRight";
import FadeInLeft from "hooks/fadeInLeft";
// import introImg from "assets/illustrations/gpo-ford.svg"
import BackgroundImage from "gatsby-background-image"
import {GatsbyImage, getImage } from "gatsby-plugin-image"



export const Intro = () => {
  const { theme } = useContext(ThemeContext);


  const data = useStaticQuery(graphql`
  query{
      file:file(relativePath:{
          eq:"hero-main-comp.png"
      }){
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      },   
  }
  `);


  return (
    <BckgImgStyle>
      {/* <BackgroundImage
        className="hero-main-img"
        fluid={data.indexImage.childImageSharp.fluid}
        fadeIn
      > */}
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

                <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
                  
                  />
                </BorderedImage >
              </FadeInLeft>
            </Thumbnail>
          </IntroWrapper>
        </Wrapper>
      </BackgroundImage>
    </BckgImgStyle>
  );
};

