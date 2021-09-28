import React, { useContext, createRef } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"




const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper desktop={desktop} theme={theme}>
        <NavLink href="#oktatas">
          Oktatás
        </NavLink>
        <NavLink href="#about" >
          Rólunk
        </NavLink>
        <NavLink href="#tanuloink"  >
          Tanulóink
        </NavLink>
        <NavLink href="#contact" >
          Kapcsolat
        </a>
      <ToggleTheme />

    </Wrapper>
  )
}

export default NavbarLinks

