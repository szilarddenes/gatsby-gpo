import React, { useContext, useState } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
// import { Link, animateScroll as scroll } from "react-scroll"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext)


  return (
    <Wrapper desktop={desktop} theme={theme}>
      <a
        // to="/#oktatas"
        // activeClass="active"
        // spy={true}
        // smooth={true}
        // offset={0}
        // duration={500}
        key={index}
        onClick={() => scrollTo("#oktatas")}
      >
        Oktatás
      </a>
      <Link
        to="/#about"
        // activeClass="active"
        // spy={true}
        // smooth={true}
        // offset={0}
        // duration={500}
      >
        Rólunk
      </Link>
      <Link
        to="/#tanuloink"
        // activeClass="active"
        // spy={true}
        // smooth={true}
        // offset={0}
        // duration={500}
      >
        Tanulóink
      </Link>
      <Link
        to="/#contact"
        // activeClass="active"
        // spy={true}
        // smooth={true}
        // offset={0}
        // duration={500}
      >
        Kapcsolat
      </Link>
      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks
