import React, {useContext} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <NavLink href="#about">Oktatás</NavLink>
      <NavLink href="#projects">Rólunk</NavLink>
      <NavLink href="#contact">Tanulóink</NavLink>
      <NavLink href="#contact">Kapcsolat</NavLink>
      <ToggleTheme />
    </Wrapper>
  )

};

export default NavbarLinks;
