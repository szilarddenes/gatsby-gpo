import React, { useContext } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext)


  return (
    <Wrapper desktop={desktop} theme={theme}>
      <a 
       to=""
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
      
      >
        Kapcsolat
      </Link>
      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks
