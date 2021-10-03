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
          placeholder="blurred"
          layout="fixed"
          width={'max-content'}
          height={'max-content'}
          />
        {/* </FadeInLeft> */}
      </Thumbnail>
    )
}

export default HeroImage