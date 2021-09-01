import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import './index.css';
import App from './App';

WebFont.load({
  google: {
    // Work+Sans:wght@400;500;700
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

const Index = () => {
  return (
    <App />
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));