import React, { useContext, createRef } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
import ScrollSpy from "hooks/scrollSpy"



const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper desktop={desktop} theme={theme}>
      <ScrollSpy>
        <a href="#oktatas" ref={createRef()} duration="250ms" >
          Oktatás
        </a>
        <a href="#about" ref={createRef()} duration="250ms">
          Rólunk
        </a>
        <a href="#tanuloink" ref={createRef()} duration="250ms">
          Tanulóink
        </a>
        <a href="#contact" ref={createRef()} duration="250ms">
          Kapcsolat
        </a>
      </ScrollSpy>
      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks

