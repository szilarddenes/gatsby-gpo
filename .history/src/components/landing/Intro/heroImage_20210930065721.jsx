import React from 'react'

import { Thumbnail, BorderedImage } from "./styles";
import FadeInLeft from "hooks/fadeInLeft";
import { StaticImage } from "gatsby-plugin-image"



  // const data = useStaticQuery(graphql`
  // query{
  //     indexImage:file(relativePath:{
  //         eq:"hero-main-comp.png"
  //     }){
  //         childImageSharp{
  //             fluid(maxWidth:800, quality: 100){
  //                 ...GatsbyImageSharpFluid_withWebp
  //             }
  //         }
  //     },
      
  // }
  // `);


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