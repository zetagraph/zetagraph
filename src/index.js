import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// Global style
// eslint-disable-next-line
injectGlobal`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Avenir Next', 'Helvetica Neue', 'Roboto', sans-serif;
  }
`
