import React from 'react';

import { storiesOf } from '@storybook/react';

import SvgFileZoomPan from '../App';
import './style.css';

const style = { height: 300, border: '1px solid green' };
const path = 'https://upload.wikimedia.org/' +
              'wikipedia/commons/e/e4/' +
              'World_Map_Blank_-_with_blue_sea.svg';
const svg = '<svg width="100" height="100">' +
            '<circle cx="50" cy="50" r="40" fill="yellow" />' +
            '</svg>';

storiesOf('Load SVG string', module)
  .add('single', () => (
    <div style={style}>
      <SvgFileZoomPan
        svg={svg}
        duration={300}
        resize
      />
    </div>
  ))


storiesOf('Load SVG files', module)
  .add('single', () => (
    <div style={style}>
      <SvgFileZoomPan
        svgPath={path}
        duration={300}
        resize
      />
    </div>
  ))
  .add('multiple', () => (
    <div>
      <div style={style}>
        <SvgFileZoomPan
          svgPath={path}
          duration={300}
          resize
        />
      </div>
      <div style={style}>
        <SvgFileZoomPan
          svgPath={path}
          duration={300}
          resize
        />
      </div>
    </div>
  ));

storiesOf('General loading SVG', module)
  .add('svg string', () => (
    <div style={style}>
      <SvgFileZoomPan
        svg={svg}
        duration={300}
        resize
      />
    </div>
  ))
  .add('svg file', () => (
    <div style={style}>
      <SvgFileZoomPan
        svg={path}
        duration={300}
        resize
      />
    </div>
  ))
