import React, { useContext, createRef } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
// import scrollNav from "hooks/scrollNav"



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


<scrollNav selector="section">
        <section id="oktatas" data-nav-title="Section 1" data-scrollspy />
        <section id="about" data-nav-title="Section 2" data-scrollspy />
        <section id="tanuloink" data-nav-title="Section 3" data-scrollspy />
        <section id="contact" data-nav-title="Section 4" data-scrollspy />
        <section id="section5" data-nav-title="Section 5" data-scrollspy />
        <section id="section6" data-nav-title="Section 6" data-scrollspy />
      </scrollNav>
      
      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks

