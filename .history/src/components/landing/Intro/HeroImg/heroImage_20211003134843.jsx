import React from 'react'

import { Thumbnail, BorderedImage } from "../styles";
import FadeInLeft from "hooks/fadeInLeft";
import { StaticImage } from "gatsby-plugin-image"


const HeroImage = () => {
  const width= 144
    return (
        <Thumbnail>
        {/* <FadeInLeft> */}
          <StaticImage src="../../../../assets/illustrations/hero-main-comp.png" alt=""  
          as={BorderedImage} 
          objectFit="none"
          width="1500px"
          height="1500px"
          />
        {/* </FadeInLeft> */}
      </Thumbnail>
    )
}

export default HeroImage