import React from 'react';
import { shallow } from 'enzyme';

import SvgFileZoomPan from '../index';
import { path, svg } from './helper/params';

let wrapped;

beforeEach(() => {
  wrapped = shallow(
    <SvgFileZoomPan
      svg={svg}
      duration={300}
      resize
    />
  );
});

it('shows .svg-file-zoom-pan', () => {
  expect(wrapped.find('.svg-file-zoom-pan').length).toEqual(1);
});
