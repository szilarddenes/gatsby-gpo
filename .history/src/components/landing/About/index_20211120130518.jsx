import React, { useContext } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { ThemeContext } from "providers/ThemeProvider"
import { Container, Button } from "components/common"
import imgAbout from "assets/illustrations/hero-about.webp" // graphql in later
import { Wrapper, AboutWrapper, Details, Thumbnail } from "./styles"

const About = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper id="about" as={Container}>
          <h1>Rólunk</h1>
          <Button as={AnchorLink} to="#contact" className="mob">
            Jelentkezz
          </Button>
      <AboutWrapper >
     
        <Details theme={theme} className="desk">
          <p>
            Pálfi Gáspár Csaba vagyok, több mint 10 éve oktatok B kategóriában,
            az évek során dolgoztam már udvarhelyszéki autós iskolának is,
            jelenleg pedig magánvállalkozóként saját autókkal oktatok.
          </p>
          <p>
            A #GPO autósiskolában a B kategória mellett, COD96 és BE kategóriás
            képzéseken is részt vehetsz. Ha minket választasz, a minőségi
            oktatás mellett segítünk a ügyintézés minden fázisában, irodánkban
            lehetőséget biztosítunk az elméleti vizsgára való gyakorlásra is.
          </p>
          <Button className="" as={AnchorLink} to="#contact">
            Jelentkezz
          </Button>
        </Details>
        <Thumbnail>
        </Thumbnail>
      </AboutWrapper>
      <Details className="mob" theme={theme}>
          <p >
            Pálfi Gáspár Csaba vagyok, több mint 10 éve oktatok B kategóriában,
            az évek során dolgoztam már udvarhelyszéki autós iskolának is,
            jelenleg pedig magánvállalkozóként saját autókkal oktatok.
          </p>
          <p>
            A #GPO autósiskolában a B kategória mellett, COD96 és BE kategóriás
            képzéseken is részt vehetsz. Ha minket választasz, a minőségi
            oktatás mellett segítünk a ügyintézés minden fázisában, irodánkban
            lehetőséget biztosítunk az elméleti vizsgára való gyakorlásra is.
          </p>
         
        </Details>
    </Wrapper>
  )
}

export default About
