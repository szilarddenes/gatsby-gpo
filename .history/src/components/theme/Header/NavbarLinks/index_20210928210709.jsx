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
      <Link to="#oktatas" >
        Oktatás
      </Link>
      <Link to="#about" >
        Rólunk
      </Link>
      <Link to="#tanuloink" >
        Tanulóink
      </Link>
      <Link to="#contact" >
        Kapcsolat
      </Link>
      <ToggleTheme />

    </Wrapper>
  )
}

export default NavbarLinks

