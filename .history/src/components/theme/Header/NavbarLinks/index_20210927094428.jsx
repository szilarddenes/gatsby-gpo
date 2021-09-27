import React, {useContext} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';
import { Link } from "gatsby"

const NavLink = props => (
  <Link
    {...props}
    getProps={linkProps => {
      // Use your custom logic for "isCurrent"
      // const { isCurrent } = linkProps
      const isCurrent = props.to === linkProps.location.hash

      // debug
      console.info(
        `linkProps==> ${isCurrent}`,
        linkProps.location.hash,
        `props =>`,
        props.to
      )
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? "red" : "gold"
        }
      }
    }}
  />
)

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <NavLink activeClassName="active"  to="#about">Oktatás</NavLink>
      <NavLink activeClassName="active"  to="#projects">Rólunk</NavLink>
      <NavLink activeClassName="active"  to="#contact">Tanulóink</NavLink>
      <NavLink activeClassName="active"  to="#contact">Kapcsolat</NavLink>
      <ToggleTheme />
    </Wrapper>
  )

};

export default NavbarLinks;
