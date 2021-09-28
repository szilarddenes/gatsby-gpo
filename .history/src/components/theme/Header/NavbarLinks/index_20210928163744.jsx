import React, { useContext, createRef } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"



const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper desktop={desktop} theme={theme}>
  
        <a href="#oktatas" id="link-"  " id="link-" >
          Oktatás
        </a>
        <a href="#about" " id="link-" >
          Rólunk
        </a>
        <a href="#tanuloink" " id="link-" >
          Tanulóink
        </a>
        <a href="#contact" " id="link-" >
          Kapcsolat
        </a>


      
      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks
