import React, { useContext } from 'react';
import { Link,useStaticQuery, graphql } from 'gatsby';
// import Img from "gatsby-image"
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand, LogoStyle } from './styles';
import Logo from "assets/illustrations/gpo-logo-gatsby.svg"
import LogoSvg from "assets/illustrations/gpo-logo-gatsby.svg"



const getImages = graphql`
query{
  indexImage:file(relativePath:{
      eq:"hero-main-cartoon.png"
  }){
      childImageSharp{
          fluid(maxWidth:60){
              ...GatsbyImageSharpFluid
          }
      }
  },
  
}

`



const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const data=useStaticQuery(getImages)

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" theme={theme}>
      <LogoStyle>
      {/* <img src={Logo} alt="#GPO Logo" /> */}
      {/* <LogoSvg /> */}
      {/* <Img fluid={data.indexImage.childImageSharp.fluid} /> */}
      ?GPO
      </LogoStyle>
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
