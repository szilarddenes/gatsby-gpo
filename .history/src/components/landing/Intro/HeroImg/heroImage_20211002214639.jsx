import React from 'react'

import { Thumbnail, BorderedImage } from "../styles";
import FadeInLeft from "hooks/fadeInLeft";
import { StaticImage } from "gatsby-plugin-image"


const HeroImage = () => {
    return (
        <Thumbnail>
        <FadeInLeft>
          <BorderedImage>
          <StaticImage src="../../../../assets/illustrations/hero-main-comp.png" alt=""  
          as={BorderedImage} 
          objectFit="none"
          />
          </BorderedImage >
        </FadeInLeft>
      </Thumbnail>
    )
}

export default HeroImage