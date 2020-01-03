import React from 'react';
import { mount } from 'enzyme';

import SvgFileZoomPan from '../../app';
import { svgContent } from '../helper/params';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <SvgFileZoomPan
      svg={svgContent}
      duration={300}
      resize
    />
  );
});

it('shows .svg-file-zoom-pan', () => {
  expect(wrapped.find('.svg-file-zoom-pan').length).toEqual(1);
});

it('shows circle', () => {
  expect(wrapped.html()).toContain(svgContent);
});
