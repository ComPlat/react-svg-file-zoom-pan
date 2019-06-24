// import React from 'react';
import * as d3 from 'd3';

import zoomable from './zoomable';

class SvgWrapper {
  constructor(props) {
    this.setSvg = this.setSvg.bind(this);
  }

  setSvg(props) {
    this.svg = zoomable(props);
  }

  create(input) {
    this.setSvg(input);
    this.draw(input);
  }

  update(input) {
    this.destroy(input.el);
    this.setSvg(input);
    this.draw(input);
  }

  destroy(el) {
    d3.select(el).selectAll('svg').remove();
  }

  draw(props) {
    const { svg, svgPath } = props;
    if (svg) {
      this.renderStr(props, svg)
    } else {
      d3.xml(svgPath)
        .then(file => this.renderFile(props, file))
        .catch(err => console.log(err)); // eslint-disable-line
    }
  }

  renderFile(props, file) {
    const { resize } = props;
    const node = file.getElementsByTagName('svg')[0];
    if (resize) {
      node.setAttribute('width', '100%');
      node.setAttribute('height', '100%');
    }
    this.svg.node().appendChild(node);
  }

  renderStr(props, str) {
    this.svg.html(str);
  }
}

export default SvgWrapper;
