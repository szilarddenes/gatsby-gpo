import React, {useContext} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink href="#about">Oktatás</AnchorLink>
      <AnchorLink href="#projects">Rólunk</AnchorLink>
      <AnchorLink href="#contact">Tanulóink</AnchorLink>
      <AnchorLink href="#contact">Tanulóink</AnchorLink>
      <ToggleTheme />
    </Wrapper>
  )

};

export default NavbarLinks;
