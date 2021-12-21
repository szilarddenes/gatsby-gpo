import React from 'react'

import { Thumbnail, BorderedImage } from "../styles";
import FadeInLeft from "hooks/fadeInLeft";
import { StaticImage } from "gatsby-plugin-image"


const HeroImage = () => {
 
    return (
        <Thumbnail>
        {/* <FadeInLeft> */}
          <StaticImage src="../../../../assets/illustrations/hero-main-comp.png" alt=""  
          as={BorderedImage} 
          objectFit="none"
          maxWidth={1448}
          alt="hero"
          loading="eager"
          style{{margin:"5rem"}}
          />
        {/* </FadeInLeft> */}
      </Thumbnail>
    )
}

export default HeroImage