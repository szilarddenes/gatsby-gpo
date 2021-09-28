import React, { useContext, createRef } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
import { ScrollNav } from "hooks/scrollNav"



const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper desktop={desktop} theme={theme}>
{/*   
        <a href="#oktatas" >
          Oktatás
        </a>
        <a href="#about">
          Rólunk
        </a>
        <a href="#tanuloink">
          Tanulóink
        </a>
        <a href="#contact">
          Kapcsolat
        </a> */}


<ScrollNav selector="div">

        <div id="oktatas" data-nav-title="oktatas" data-scrollspy />
        <div id="about" data-nav-title="about" data-scrollspy />
        <div id="tanuloink" data-nav-title="tanuloink" data-scrollspy />
        <div id="contact" data-nav-title="contact" data-scrollspy />
     
      </ScrollNav>
      
      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks

