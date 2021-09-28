import React, { useContext, createRef } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
import Scrollspy from 'react-scrollspy'




const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <Scrollspy items={['oktatas', 'about', 'tanuloink', 'contact']} currentClassName="active">
        <a href="#oktatas">
          Oktatás
        </a>
        <a href="#about" >
          Rólunk
        </a>
        <a href="#tanuloink"  >
          Tanulóink
        </a>
        <a href="#contact" >
          Kapcsolat
        </a>
      </Scrollspy>
      <ToggleTheme />

    </Wrapper>
  )
}

export default NavbarLinks

