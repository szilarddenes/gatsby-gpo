import React, { useContext, useState } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
import { Link } from "react-scroll"

const NavbarLinks = ({ desktop, props}) => {
  const { theme } = useContext(ThemeContext)
  const [sidebar, toggle] = useState(false)

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <Link
        to="oktatas"
        activeClass="active"
        spy={false}
        smooth={true}
        duration={200}
        offset={0}
        sidebar={sidebar}
        onClick={() => toggle(!sidebar)}
      >
        #Oktatás
      </Link>
      <Link
        to="about"
        activeClass="active"
        spy={false}
        smooth={true}
        duration={200}
        offset={0}
      >
        #Rólunk
      </Link>
      <Link
        to="tanuloink"
        activeClass="active"
        spy={false}
        smooth={true}
        duration={200}
        offset={-70}
      >
        #Tanulóink
      </Link>
      <Link
        to="contact"
        activeClass="active"
        spy={false}
        smooth={true}
        duration={200}
        offset={-70}
      >
        #Kapcsolat
      </Link>
      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks
