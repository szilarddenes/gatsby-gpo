import React, { useContext, createRef } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
// import { ScrollNav } from "hooks/scrollNav"



const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper desktop={desktop} theme={theme}>
  
        <a href="#oktatas" activeClassName="active">
          Oktatás
        </a>
        <a href="#about" activeClassName="active">
          Rólunk
        </a>
        <a href="#tanuloink" activeClassName="active">
          Tanulóink
        </a>
        <a href="#contact" activeClassName="active">
          Kapcsolat
        </a>


      
      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks

