import React, { useContext } from 'react';
import loadable from '@loadable/component'
import { ThemeContext } from 'providers/ThemeProvider';
import { Global } from './styles';
import './fonts.css';
import Popup from "components/common/GDPR/Popup.jsx"

  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }
      {isOpen && <Popup handleClose={togglePopup} />}

const Footer = loadable(() => import('../../theme/Footer/index.jsx'))


export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Global theme={theme} />
      {children}

      <Footer />
    </>
  );
};

