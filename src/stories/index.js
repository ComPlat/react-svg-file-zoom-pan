import React from 'react';
import { storiesOf } from '@kadira/storybook';
import SvgFileZoomPan from '../SvgFileZoomPan';
import '../stylesheets/style.css';

storiesOf('SvgFileZoomPan', module)
  .add('single view', () => (
    <div style={{ height: 300, border: '1px solid green' }}>
      <SvgFileZoomPan svgPath="https://upload.wikimedia.org/wikipedia/commons/e/e4/World_Map_Blank_-_with_blue_sea.svg"
        duration={300}
        resize={true} />
    </div>
  ))
  .add('multiple view', () => (
    <div>
      <div style={{ height: 300, border: '1px solid green' }}>
        <SvgFileZoomPan svgPath="https://upload.wikimedia.org/wikipedia/commons/e/e4/World_Map_Blank_-_with_blue_sea.svg"
          duration={300}
          resize />
      </div>
      <div style={{ height: 300, border: '1px solid green' }}>
        <SvgFileZoomPan svgPath="https://upload.wikimedia.org/wikipedia/commons/e/e4/World_Map_Blank_-_with_blue_sea.svg"
          duration={300}
          resize={true} />
      </div>
    </div>
  ));
