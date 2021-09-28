import React, { useContext, createRef } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
// import ScrollSpy from "hooks/scrollSpy"



const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper desktop={desktop} theme={theme}>
      <div id="scrollspy" >
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
        </a>
      </div>
      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks

