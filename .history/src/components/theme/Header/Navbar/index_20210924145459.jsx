import React, { useContext } from 'react';
import { Link,useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand, LogoStyle } from './styles';
import Logo from "assets/illustrations/gpo-logo-gatsby.svg"



const getImages = graphql`

{edges.map(({ node}))}
`


const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" theme={theme}>
      <LogoStyle>
      <img src={Logo} alt="#GPO Logo" />
      </LogoStyle>
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
