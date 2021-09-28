import React, { useContext, createRef } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"




const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext)


  return (
    <Wrapper desktop={desktop} theme={theme}>
      {/* <ScrollSpy> */}
      <a href="#oktatas" id="link-oktatas"   >
        Oktatás
      </a>
      <a href="#about" id="link-about"  >
        Rólunk
      </a>
      <a href="#tanuloink" id="link-tanuloink"  >
        Tanulóink
      </a>
      <a href="#contact" id="link-contact" >
        Kapcsolat
      </a>
      {/* </ScrollSpy> */}


      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks

