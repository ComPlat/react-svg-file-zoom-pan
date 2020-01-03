import React from 'react';
import { mount } from 'enzyme';

import SvgFileZoomPan from '../../app';
import { pathContent } from '../helper/params';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <SvgFileZoomPan
      svg={pathContent}
      duration={300}
      resize
    />);
});

it('shows path', () => {
  expect(wrapped.props().svg).toBe(pathContent);
});
