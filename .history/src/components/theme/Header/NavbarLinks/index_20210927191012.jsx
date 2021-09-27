import React, { useContext } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext)


  return (
    <Wrapper desktop={desktop} theme={theme}>
      <import { AnchorLink } from "gatsby-plugin-anchor-links";
        to="oktimport { AnchorLink } from "gatsby-plugin-anchor-links";tas"
       
      >
        Oktatás
      </import>
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
      
      >
        Kapcsolat
      </Link>
      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks
