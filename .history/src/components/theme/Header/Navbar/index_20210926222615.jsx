import React, { useContext } from 'react';
import { Link,useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand, LogoStyle } from './styles';
import Logo from "assets/illustrations/gpo-logo-gatsby.svg"
import { StaticImage } from "gatsby-plugin-image"



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
      <StaticImage
     src={Logo}
     alt="gpo logo"
     placeholder="blurred"
     layout="fixed"
     width={200}
     height={200}
   />
      <img src={Logo} alt="#GPO Logo" />
      {/* <Img fluid={data.indexImage.childImageSharp.fluid} /> */}
      </LogoStyle>
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
