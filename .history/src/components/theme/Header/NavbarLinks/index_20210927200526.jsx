// import React, { useContext } from "react"
// import { ThemeContext } from "providers/ThemeProvider"
// import ToggleTheme from "components/theme/Header/ToggleTheme"
// import { Wrapper } from "./styles"
// import { AnchorLink } from "gatsby-plugin-anchor-links"

// const NavbarLinks = ({ desktop }) => {
//   const { theme } = useContext(ThemeContext)

//   return (
//     <Wrapper desktop={desktop} theme={theme}>
//       <AnchorLink to="/#oktatas">Oktatás</AnchorLink>
//       <AnchorLink to="/#about">Rólunk</AnchorLink>
//       <AnchorLink to="/#tanuloink">Tanulóink</AnchorLink>
//       <AnchorLink to="/#contact">Kapcsolat</AnchorLink>
//       <ToggleTheme />
//     </Wrapper>
//   )
// }

// export default NavbarLinks


import React, {useContext} from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';
import { Link, animateScroll as scroll } from "react-scroll";

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <Link to="oktatas" activeClass="active"
    
    duration={500} smooth={true} spy={true}>Oktatás</Link>
      <Link to="about" activeClass="active"
    
    duration={500} smooth={true} spy={true}>Rólunk</Link>
      <Link to="tanuloink" activeClass="active"
    
    duration={500} smooth={true} spy={true}>Tanulóink</Link>
      <Link to="contact" activeClass="active"
    
    duration={500} smooth={true} spy={true}>Kapcsolat</Link>
      <ToggleTheme />
    </Wrapper>
  )

};



export default NavbarLinks;