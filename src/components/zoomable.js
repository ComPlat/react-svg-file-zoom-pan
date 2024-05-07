/* eslint-disable no-unused-vars, no-use-before-define */
const d3 = require('d3');

const zoomable = ({ el, duration }) => {
  const zoomed = (event, d) => {
    svg.attr('transform', event.transform);
  };
  const zoom = d3.zoom().on('zoom', zoomed);

  const resetZoom = () => {
    svg.transition()
      .duration(duration)
      .call(
        zoom.transform,
        d3.zoomIdentity,
      );
  };

  const svg = d3.select(el)
    .append('svg')
    .attr('id', 'svg-file-container')
    .attr('width', '100%')
    .attr('height', '100%')
    .call(zoom)
    .on('dblclick.zoom', resetZoom)
    .append('g');
  return svg;
};

export default zoomable;
