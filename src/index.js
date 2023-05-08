import React from 'react';
import ReactDOM from 'react-dom';

import SvgFileZoomPan from './app';

const style = { height: 300, border: '1px solid green' };

const svg = '<svg width="100" height="100">'
+ '<circle cx="50" cy="50" r="40" fill="yellow" />'
+ '</svg>';

// - - - DOM - - -
ReactDOM.render(
  <div style={style}>
    <SvgFileZoomPan
      svg={svg}
      duration={300}
      resize
    />
  </div>,
  document.getElementById('root'),
);
