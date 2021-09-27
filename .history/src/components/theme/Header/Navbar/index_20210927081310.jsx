import React, { useContext } from 'react';
import { Link, graphql } from 'gatsby';
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
// const data=useStaticQuery(getImages)

{/* <Img fluid={data.indexImage.childImageSharp.fluid} /> */}



const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" theme={theme}>
      <LogoStyle>
      <StaticImage
     src='../../../../assets/illustrations/gpo-logo-gatsby.svg'
     alt="#gpo logo"
     placeholder="blurred"
     width={55}
     height={55}
   />
   <img src={Logo} alt="#gpo logo" width={55}
     height={55} />
      </LogoStyle>
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
