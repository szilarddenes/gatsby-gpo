import React, { useContext } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
// import { Link, animateScroll as scroll } from "react-scroll"

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext)


  return (
    <Wrapper desktop={desktop} theme={theme}>
      <a
        to="oktatas"
       
      >
        Oktatás
      </a>
      <Link
        to="about"
        
      >
        Rólunk
      </Link>
      <Link
        to="tanuloink"
        
      >
        Tanulóink
      </Link>
      <Link
        to="contact"
        className="contact"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Kapcsolat
      </Link>
      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks
