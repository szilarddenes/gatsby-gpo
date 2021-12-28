import React, { useContext, useState } from "react"
import { Container } from "components/common"
import { ThemeContext } from "providers/ThemeProvider"
import { Wrapper, Details, MapStyleParent, MapStyle, Center} from "./styles"
import loadable from "@loadable/component"
// import Popup from "components/common/GDPR/Popup.jsx"

const ContactFormR = loadable(() => import("./FormR/index.jsx"))

const LeafletMap = loadable(() => import("./LeafletMap/index.jsx"))

const Popup = loadable(() =>
  import("../../../components/common/GDPR/Popup.jsx")
)

const Contact = () => {
  const { theme } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false)
  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Wrapper as={Container} id="contact">
        <Details theme={theme}>
          <h1>Kapcsolat</h1>
          <ContactFormR />
          <Center></Center>
          <>
            <small >
              *Az Elküldöm gomb megnyomásával kijelentem, hogy megismertem és
              elfogadom az {' '} 
              <span>
                <a theme={theme} onClick={togglePopup} id="linkHighlight">
                  Adatkezelési tájékoztatót.
                </a>
              </span>
            </small>
          </>
        </Details>

        <Details style={{ paddingRight: "0", zIndex: "1" }} theme={theme}>
          <MapStyleParent>
            <MapStyle>
              <LeafletMap
                position={[46.30311, 25.29428]}
                zoom={8}
                markerText={"Hello, this is a marker"}
                id="linkToMap"
              />
            </MapStyle>
          </MapStyleParent>
        </Details>
      </Wrapper>
      {isOpen && <Popup handleClose={togglePopup} />}
    </>
  )
}

export default Contact
