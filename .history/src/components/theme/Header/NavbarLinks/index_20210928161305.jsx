import React, { useContext, createRef } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
// import { ScrollNav } from "hooks/scrollNav"



const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper desktop={desktop} theme={theme}>
  
        <Link href="#oktatas" activeClassName="active">
          Oktatás
        </Link>
        <Link href="#about" activeClassName="active">
          Rólunk
        </Link>
        <Link href="#tanuloink" activeClassName="active">
          Tanulóink
        </Link>
        <Link href="#contact" activeClassName="active">
          Kapcsolat
        </Link>


      
      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks

