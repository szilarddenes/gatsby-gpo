import React, { useContext, useState, } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'




const NavbarLinks = ({ desktop, props }) => {
  const { theme } = useContext(ThemeContext)


  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink to="#oktatas">
        Oktatás
      </AnchorLink>
      <AnchorLink to="#about">
        Rólunk
      </AnchorLink>
      <AnchorLink to="#tanuloink">
        Tanulóink
      </AnchorLink>
      <AnchorLink to="#contact">
        Kapcsolat
      </AnchorLink>
      <ToggleTheme />

    </Wrapper>
  )
}

export default NavbarLinks
