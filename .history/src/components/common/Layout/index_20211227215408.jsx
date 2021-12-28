import React, { useContext, use } from 'react';
import loadable from '@loadable/component'
import { ThemeContext } from 'providers/ThemeProvider';
import { Global } from './styles';
import './fonts.css';

  

const Footer = loadable(() => import('../../theme/Footer/index.jsx'))
const Popup = loadable(() => import('../GDPR/Popup.jsx'))


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

      <Footer />
      {isOpen && <Popup handleClose={togglePopup} />}
    </>
  );
};

