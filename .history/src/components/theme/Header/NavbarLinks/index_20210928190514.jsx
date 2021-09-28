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
      <AnchorLink to="/#oktatas" onAnchorLinkClick={toggleClass} className={`${this.state}`} >
        Oktatás
      </AnchorLink>
      <AnchorLink to="/#about" onAnchorLinkClick={toggleClass} className={`${this.state}`} >
        Rólunk
      </AnchorLink>
      <AnchorLink to="/#tanuloink"  onAnchorLinkClick={toggleClass} className={`${this.state}`} >
        Tanulóink
      </AnchorLink>
      <AnchorLink to="/#contact" onAnchorLinkClick={toggleClass} className={`${this.state}`} >
        Kapcsolat
      </AnchorLink>
      <ToggleTheme />

    </Wrapper>
  )
}

export default NavbarLinks

