import React, { useContext } from 'react';
import loadable from '@loadable/component'
import { ThemeContext } from 'providers/ThemeProvider';
import { Global } from './styles';
import './fonts.css';
import Popup from "components/common/GDPR/Popup.jsx"

  

const Footer = loadable(() => import('../../theme/Footer/index.jsx'))


export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Global theme={theme} />
      {children}

      {isOpen && <Popup handleClose={togglePopup} />}
      <Footer />
    </>
  );
};

