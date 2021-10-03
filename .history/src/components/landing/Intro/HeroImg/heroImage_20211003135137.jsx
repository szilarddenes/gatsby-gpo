import React from 'react'

import { Thumbnail, BorderedImage } from "../styles";
import FadeInLeft from "hooks/fadeInLeft";
import { StaticImage } from "gatsby-plugin-image"


const HeroImage = () => {
  const width= 1440
  const maxWidth=1440
    return (
        <Thumbnail>
        {/* <FadeInLeft> */}
          <StaticImage src="../../../../assets/illustrations/hero-main-comp.png" alt=""  
          as={BorderedImage} 
          objectFit="none"
          width={1440} aspectRatio={16/9}
          />
        {/* </FadeInLeft> */}
      </Thumbnail>
    )
}

export default HeroImage