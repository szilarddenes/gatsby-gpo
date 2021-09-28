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


<ScrollNav selector="a">
        <a href="" data-scrollspy-id="oktatas"></a>
        <a href="" data-scrollspy-id="about"></a>
        <a href="" data-scrollspy-id="tanuloink"></a>
        <a href="" data-scrollspy-id="oktatas"></a>
        {/* <section id="oktatas" data-nav-title="oktatas" data-scrollspy />
        <section id="about" data-nav-title="about" data-scrollspy />
        <section id="tanuloink" data-nav-title="tanuloink" data-scrollspy />
        <section id="contact" data-nav-title="contact" data-scrollspy /> */}
     
      </ScrollNav>
      
      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks

