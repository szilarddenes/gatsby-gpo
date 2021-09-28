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
      <AnchorLink to="/#oktatas" onClick={toggleAccordion} className={`${state}`} >
        Oktatás
      </AnchorLink>
      <AnchorLink to="/#about" onClick={toggleAccordion} className={`${state}`} >
        Rólunk
      </AnchorLink>
      <AnchorLink to="/#tanuloink"  onClick={toggleAccordion} className={`${state}`} >
        Tanulóink
      </AnchorLink>
      <AnchorLink to="/#contact" onClick={toggleAccordion} className={`${state}`} >
        Kapcsolat
      </AnchorLink>
      <ToggleTheme />

    </Wrapper>
  )
}

export default NavbarLinks

