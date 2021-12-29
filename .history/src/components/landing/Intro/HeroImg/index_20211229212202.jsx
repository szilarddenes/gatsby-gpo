import React from 'react'

import { Thumbnail, BorderedImage } from "../styles";
// import FadeInLeft from "hooks/fadeInLeft";
import { StaticImage } from "gatsby-plugin-image"


const HeroImage = () => {
 
    return (
        <Thumbnail>
        {/* <FadeInLeft> */}
          <StaticImage src="../../../../assets/illustrations/hero-main-comp.png"   
          as={BorderedImage} 
          objectFit="cover"
          maxWidth={1448}
          alt="hero"
          loading="eager"
          />
        {/* </FadeInLeft> */}
      </Thumbnail>
    )
}

export default HeroImage