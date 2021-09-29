import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App/App'
import {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
html {
  font-size: 2rem;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
`;

ReactDOM.render(
    <React.StrictMode>
        <Global />
        <App />
    </React.StrictMode>,
  document.getElementById('root')
);