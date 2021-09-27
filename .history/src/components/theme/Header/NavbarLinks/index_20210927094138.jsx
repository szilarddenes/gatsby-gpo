import React, {useContext} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <NavLink activeClass exact to="#about">Oktatás</NavLink>
      <NavLink activeClass exact to="#projects">Rólunk</NavLink>
      <NavLink activeClass exact to="#contact">Tanulóink</NavLink>
      <NavLink activeClass exact to="#contact">Kapcsolat</NavLink>
      <ToggleTheme />
    </Wrapper>
  )

};

export default NavbarLinks;