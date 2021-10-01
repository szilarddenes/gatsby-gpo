import React, { useContext } from 'react'

import { Thumbnail, BorderedImage, Details } from "./styles";
import { Button } from "components/common";
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import FadeInRight from "hooks/fadeInRight";
import FadeInLeft from "hooks/fadeInLeft";
import { ThemeContext } from "providers/ThemeProvider";


  const data = useStaticQuery(graphql`
  query{
      indexImage:file(relativePath:{
          eq:"hero-main-comp.png"
      }){
          childImageSharp{
              fluid(maxWidth:800, quality: 100){
                  ...GatsbyImageSharpFluid_withWebp
              }
          }
      },
      
  }
  `);


const HeroImage = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <Thumbnail>
      <BckgImgStyle>
      <BackgroundImage
        className="hero-main-comp"
        fluid={data.indexImage.childImageSharp.fluid}
        fadeIn
      >
      <FadeInLeft>

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


        <BorderedImage>
          <StaticImage src="../../../assets/illustrations/hero-main-comp.png" alt="" />
        </BorderedImage >

      </FadeInLeft>

      </BackgroundImage>
    </BckgImgStyle> 
    </Thumbnail>
  )
}

export default HeroImage


    // <BckgImgStyle>
    //   <BackgroundImage
    //     className="hero-main-comp"
    //     fluid={data.indexImage.childImageSharp.fluid}
    //     fadeIn
    //   >
    //   </BackgroundImage>
    // </BckgImgStyle>  

    // const data = useStaticQuery(graphql`
    // query{
    //     indexImage:file(relativePath:{
    //         eq:"hero-main-comp.png"
    //     }){
    //         childImageSharp{
    //             fluid(maxWidth:800, quality: 100){
    //                 ...GatsbyImageSharpFluid_withWebp
    //             }
    //         }
    //     },
        
    // }
    // `);