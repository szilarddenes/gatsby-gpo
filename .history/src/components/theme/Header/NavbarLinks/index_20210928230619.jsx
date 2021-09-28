import React, { useContext } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'




const NavbarLinks = ({ desktop, props }) => {
  const { theme } = useContext(ThemeContext)

  // <Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>Test 2</Link>

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <Link to="oktatas" activeClass="active"
spy={true} smooth={true} duration={200} offset={-80} >
        Oktatás
      </Link>
      <Link to="about" activeClass="active"
spy={true} smooth={true} duration={200} offset={-80}  >
        Rólunk
      </Link>
      <Link to="tanuloink" activeClass="active"
spy={true} smooth={true} duration={200}offset={-80} >
        Tanulóink
      </Link>
      <Link to="contact" activeClass="active"
spy={true} smooth={true} duration={200} offset={-380}>
        Kapcsolat
      </Link>
      <ToggleTheme />

    </Wrapper>
  )
}

export default NavbarLinks

