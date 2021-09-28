import React, { useContext, useState, } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
import { AnchorLink } from "gatsby-plugin-anchor-links";




const NavbarLinks = ({ desktop, props }) => {
  const { theme } = useContext(ThemeContext)

  const [state, setState] = useState("");
  const toggleClass = () => {
    setState(state === "" ? "active" : "");
  }

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink to="/#oktatas" className={isActive ? 'active': null} 
      onClick={toggleClass} >
        Oktatás
      </AnchorLink>
      <AnchorLink to="/#about" className={isActive ? 'active': null} 
      onClick={toggleClass} >
        Rólunk
      </AnchorLink>
      <AnchorLink to="/#tanuloink"  className={isActive ? 'active': null} 
      onClick={toggleClass} >
        Tanulóink
      </AnchorLink>
      <AnchorLink to="/#contact" className={isActive ? 'active': null} 
      onClick={toggleClass} >
        Kapcsolat
      </AnchorLink>
      <ToggleTheme />

    </Wrapper>
  )
}

export default NavbarLinks

