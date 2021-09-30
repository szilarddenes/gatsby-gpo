import React from 'react'

import { Wrapper, IntroWrapper, Details, Thumbnail, BorderedImage } from "./styles";
import FadeInRight from "hooks/fadeInRight";
import FadeInLeft from "hooks/fadeInLeft";
import { StaticImage } from "gatsby-plugin-image"



const HeroImage = () => {
    return (
        <Thumbnail>
        <FadeInLeft>
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