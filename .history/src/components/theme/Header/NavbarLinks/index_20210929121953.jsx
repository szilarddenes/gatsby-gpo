import React, { useContext } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import useMedia from "hooks/useMedia"




const NavbarLinks = ({ desktop, props }) => {
  const { theme } = useContext(ThemeContext)

  // const offset = useMedia('(min-width:600px)');


  return (
    <Wrapper desktop={desktop} theme={theme}>
      <Link to="oktatas" activeClass="active"
        spy={false} smooth={true} duration={200} offset={0} >
        #Oktatás
      </Link>
      <Link to="about" activeClass="active"
        spy={false} smooth={true} duration={200} offset={0}  >
        Rólunk
      </Link>
      <Link to="tanuloink" activeClass="active"
        spy={false} smooth={true} duration={200} offset={-70} >
        Tanulóink
      </Link>
      <Link to="contact" activeClass="active"
        spy={false} smooth={true} duration={200} offset={-70}>
        Kapcsolat
      </Link>
      <ToggleTheme />

    </Wrapper>
  )
}

export default NavbarLinks

