import React from 'react';
import ThemeProvider from 'srcproviders/ThemeProvider';

export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;
