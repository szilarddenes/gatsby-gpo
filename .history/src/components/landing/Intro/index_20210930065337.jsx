import React, { useContext } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { ThemeContext } from "providers/ThemeProvider";
import { Header } from "components/theme";
import { Container, Button } from "components/common";
import { Wrapper, IntroWrapper, Details } from "./styles";



const Tanuloink = loadable(() => import('../components/landing/Tanuloink/index.jsx'))

export const Intro = () => {
  const { theme } = useContext(ThemeContext);


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

  return (
    
        <Wrapper>
          <Header />
          <IntroWrapper as={Container}>
            <Details theme={theme}>
              <FadeInRight>
                <h1>Jogsi Kell?</h1>
                <h4>Jelentkezz most sofőrsulinkba!</h4>
              </FadeInRight>
              <FadeInLeft>
                <Button as={AnchorLink} to="#contact">
                  Jelentekezz
                </Button>
              </FadeInLeft>
            </Details>

          </IntroWrapper>
        </Wrapper>
     
  );
};



