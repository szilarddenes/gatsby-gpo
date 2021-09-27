import React, {useContext} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <NavLink e="#about">Oktatás</NavLink>
      <NavLink e="#projects">Rólunk</NavLink>
      <NavLink e="#contact">Tanulóink</NavLink>
      <NavLink e="#contact">Kapcsolat</NavLink>
      <ToggleTheme />
    </Wrapper>
  )

};

export default NavbarLinks;
