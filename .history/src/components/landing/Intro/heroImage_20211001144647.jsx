import React, { useContext } from 'react'

import { Thumbnail, BorderedImage,Details } from "./styles";
import {  Button } from "components/common";
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import FadeInRight from "hooks/fadeInRight";
import FadeInLeft from "hooks/fadeInLeft";
import { ThemeContext } from "providers/ThemeProvider";


const HeroImage = () => {

  const { theme } = useContext(ThemeContext);

    return (
        <Thumbnail>
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
          <StaticImage src="../../../assets/illustrations/hero-main-comp.png" alt=""  />

          

          </BorderedImage >
        </FadeInLeft>
      </Thumbnail>
    )
}

export default HeroImage


{/* <BckgImgStyle>
      <BackgroundImage
        className="hero-main-img"
        fluid={data.indexImage.childImageSharp.fluid}
        fadeIn
      >
 </BackgroundImage>
    </BckgImgStyle> */}