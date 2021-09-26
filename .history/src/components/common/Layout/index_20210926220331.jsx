import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Global } from './styles';
import './fonts.css';

const Footer = loadable(() => import('../components/theme/Footer/index.jsx'))


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
