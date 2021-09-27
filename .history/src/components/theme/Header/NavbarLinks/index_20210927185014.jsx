import React, { useContext } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
import { Link, animateScroll as scroll } from "react-scroll"

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext)


  return (
    <Wrapper desktop={desktop} theme={theme}>
      <a
        to="oktatas"
        to="oktatas"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Oktatás
      </a>
      <Link
        to="about"
        to="about"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Rólunk
      </Link>
      <Link
        to="tanuloink"
        to="tanuloink"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Tanulóink
      </Link>
      <Link
        to="contact"
        to="contact"
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