import React, { useContext } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import useMedia from "hooks/useMedia"




const NavbarLinks = ({ desktop, props }) => {
  const { theme } = useContext(ThemeContext)

  const matches = useMedia('(min-width:600px)');
  const matches = useMedia('(min-width:600px)');


  return (
    <Wrapper desktop={desktop} theme={theme}>
      <Link to="oktatas" activeClass="active"
spy={true} smooth={true} duration={200} offset={0} >
        Oktatás
        ${matches}
      </Link>
      <Link to="about" activeClass="active"
spy={true} smooth={true} duration={200} offset={0}  >
        Rólunk
      </Link>
      <Link to="tanuloink" activeClass="active"
spy={true} smooth={true} duration={200}offset={0} >
        Tanulóink
      </Link>
      <Link to="contact" activeClass="active"
spy={true} smooth={true} duration={200} offset={0}>
        Kapcsolat
      </Link>
      <ToggleTheme />

    </Wrapper>
  )
}

export default NavbarLinks
