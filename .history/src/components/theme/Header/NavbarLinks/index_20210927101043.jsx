import React, {useContext} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';
import { Link, animateScroll as scroll } from "react-scroll";

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <Link href="#about">Oktatás</Link>
      <Link href="#projects">Rólunk</Link>
      <Link href="#contact">Tanulóink</Link>
      <Link href="#contact">Kapcsolat</Link>
      <ToggleTheme />
    </Wrapper>
  )

};

<Link
    activeClass="active"
    to="section1"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
></Link>

export default NavbarLinks;
