import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand, LogoStyle } from './styles';
import Logo from "assets/illustrations/gpo-logo-bir.svg"
import loadable from '@loadable/component'
const Helmet = loadable.lib(() => import('../../../../node_modules/react-helmet'))




const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" theme={theme}>
      <LogoStyle>
   
   <img src={Logo} alt="" width={90}
     height={35} />
      </LogoStyle>
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
