import React, {useContext} from "react";
import {PopupStyles} from './styles'
import { ThemeContext } from "providers/ThemeProvider"
import html from "./html."


const Popup = props => {
  const { theme } = useContext(ThemeContext);

  return (
    <PopupStyles theme={theme}>
    <div className="popup-box"theme={theme} >
      <div className="box" theme={theme}>
        <span role="button" className="close-icon" onClick={props.handleClose} onKeyDown={props.handleClose}>x</span>


    </div>
    </div>
    </PopupStyles>
  );
};

export default Popup;