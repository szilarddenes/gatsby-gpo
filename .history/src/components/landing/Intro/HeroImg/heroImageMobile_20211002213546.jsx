import React from 'react'

import { Thumbnail, BorderedImage } from "../styles";
import FadeInLeft from "hooks/fadeInLeft";
import { StaticImage } from "gatsby-plugin-image"

const HeroImageMobile = () => {
    return (
        <Thumbnail>
        <FadeInLeft>
          <StaticImage src="../../../../assets/illustrations/hero-main-mobile-comp.png" alt=""  as={BorderedImage} />
        </FadeInLeft>
      </Thumbnail>
    )
}

export default HeroImageMobile