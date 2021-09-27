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








// import React, {useContext} from 'react';
// import { ThemeContext } from 'providers/ThemeProvider';
// import ToggleTheme from 'components/theme/Header/ToggleTheme';
// import { Wrapper } from './styles';
// import { Link, animateScroll as scroll } from "react-scroll";

// const NavbarLinks = ({ desktop }) => {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <Wrapper desktop={desktop} theme={theme}>
//       <Link to="oktatas" activeClass="active"
    
//     duration={500} smooth={true} >Oktatás</Link>
//       <Link to="about" activeClass="active"
    
//     duration={500} smooth={true} >Rólunk</Link>
//       <Link to="tanuloink" activeClass="active"
    
//     duration={500} smooth={true} >Tanulóink</Link>
//       <Link to="contact" activeClass="active"
    
//     duration={500} smooth={true} >Kapcsolat</Link>
//       <ToggleTheme />
//     </Wrapper>
//   )

// };



// export default NavbarLinks;




import React, {useContext} from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';
import ScrollSpy from 'react-scrollspy-navigation';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <ScrollSpy>
      <a to="#oktatas" 
    
   >Oktatás</a>
      <a to="#about" 
    
   >Rólunk</a>
      <a to="#tanuloink" 
    
   >Tanulóink</a>
      <a to="#contact" 
    
   >Kapcsolat</a>
   <ScrollSpy></ScrollSpy>
      <ToggleTheme />
    </Wrapper>
  )

};



export default NavbarLinks;