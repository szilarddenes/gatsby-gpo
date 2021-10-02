import React, { useContext } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "components/theme";
import { Container, Button } from "components/common";
import { Thumbnail, BorderedImage, Details, Wrapper, IntroWrapper, BckgImgStyle } from "./styles";

import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import FadeInRight from "hooks/fadeInRight";
import FadeInLeft from "hooks/fadeInLeft";
import { ThemeContext } from "providers/ThemeProvider";
import BackgroundImage from "gatsby-background-image"
// import loadable from "@loadable/component"




// const HeroImage = loadable(() => import('./heroImage.jsx'))

export const Intro = () => {

  const { theme } = useContext(ThemeContext);

  const data = useStaticQuery(graphql`
  query{
      indexImage:file(relativePath:{
          eq:"hero-main-comp.png"
      }){
          childImageSharp{
              fluid(maxWidth:1024, quality: 100){
                  ...GatsbyImageSharpFluid_withWebp
              }
          }
      },
      
  }
  `);


  return (

    <Wrapper>
      <Header />


      

      <IntroWrapper as={Container} >

            <Details theme={theme}>

            <BackgroundImage
          className="hero-main-img"
          fluid={data.indexImage.childImageSharp.fluid}
          fadeIn
          as={BckgImgStyle}
        >

              <FadeInRight>
                <h1>Jogsi Kell?</h1>
                <h4>Jelentkezz most sofőrsulinkba!</h4>
              </FadeInRight>
              <FadeInLeft>
                <Button as={AnchorLink} to="#contact">
                  WhatsApp
                </Button>
              </FadeInLeft>
            </Details>

            <Thumbnail>

              <FadeInLeft>
                {/* <BorderedImage>
                  <StaticImage src="../../../assets/illustrations/hero-main-comp.png" alt="" />
                </BorderedImage > */}
                hey hey
              </FadeInLeft>

            </Thumbnail>

          </IntroWrapper>





      <pre>

        git commit -m 'back to background imaging.With the prev. commit mobile optimization was 100%'

      </pre>

    </Wrapper>

  );
};



