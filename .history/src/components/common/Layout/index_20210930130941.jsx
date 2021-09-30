import React, { useContext } from 'react';
import loadable from '@loadable/component'
import { ThemeContext } from 'providers/ThemeProvider';
import { Global } from './styles';
import './fonts.css';

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

export default Layout
