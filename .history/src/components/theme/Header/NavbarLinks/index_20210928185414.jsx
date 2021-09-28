import React, { useContext, useState, } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
import { AnchorLink } from "gatsby-plugin-anchor-links";




const NavbarLinks = ({ desktop, props }) => {
  const { theme } = useContext(ThemeContext)
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <a href="/#oktatas" className={isActive ? 'your_className': null} 
      onClick={toggleClass} >
        Oktatás
      </a>
      <a href="/#about" className={isActive ? 'your_className': null} 
      onClick={toggleClass} >
        Rólunk
      </a>
      <a href="/#tanuloink"  className={isActive ? 'your_className': null} 
      onClick={toggleClass} >
        Tanulóink
      </a>
      <a href="/#contact" className={isActive ? 'your_className': null} 
      onClick={toggleClass} >
        Kapcsolat
      </a>
      <ToggleTheme />

    </Wrapper>
  )
}

export default NavbarLinks

