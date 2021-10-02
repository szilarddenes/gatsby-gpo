import React from 'react'

import { Thumbnail, BorderedImage } from "../styles";
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

export const HeroImageMobile = () => {
    return (
        <Thumbnail>
        <FadeInLeft>
          <BorderedImage>
          <StaticImage src="../../../assets/illustrations/hero-main-mobile-comp.png" alt=""  />
          </BorderedImage >
        </FadeInLeft>
      </Thumbnail>
    )
}

