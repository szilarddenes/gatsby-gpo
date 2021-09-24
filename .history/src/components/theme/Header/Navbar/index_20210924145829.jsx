import React, { useContext } from 'react';
import { Link,useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand, LogoStyle } from './styles';
// import Logo from "assets/illustrations/gpo-logo-gatsby.svg"



const getImages = graphql`
{
  fluid: file(relativePath: {eq: "gpo-logo-gatsby.svg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
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
      <Img fluid={data.fluid.childImageSharp.fluid} />
      </LogoStyle>
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
