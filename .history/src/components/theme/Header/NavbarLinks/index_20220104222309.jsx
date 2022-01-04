import React, { useContext } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
import { Link } from "react-scroll"
import useMedia from "hooks/useMedia";


const NavbarLinks = ({ desktop, sidebar, toggle }) => {
  const { theme } = useContext(ThemeContext)
  const isDesktop = useMedia('(min-width: 960px)');
sidebar={sidebar}
        onClick={() => toggle(!sidebar)}
  return (
    <>
      {isDesktop ? 
      <>
    <Wrapper desktop={desktop} theme={theme} sidebar={sidebar}>
        <Link
        to="oktatas"
        activeClass="active"
        spy={false}
        smooth={true}
        duration={200}
        offset={0}
        
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
  </>
  :
  <>
  <Wrapper desktop={desktop} theme={theme} sidebar={sidebar}>
        <Link
        to="oktatas"
        activeClass="active"
        spy={false}
        smooth={true}
        duration={200}
        offset={0}
        
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
  </>
  } 
</>
  )
}

export default NavbarLinks
