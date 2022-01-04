import React, { useContext } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
import { Link } from "react-scroll"

const NavbarLinks = ({ desktop, sidebar, toggle }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper desktop={desktop} theme={theme} sidebar={sidebar}>
        @media(max-width:960px){

      
      }


     
      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks
