import d3 from 'd3';

class D3SvgFileEngine {
  create(input) {
    this.draw(input);
  }

  update(input) {
    this.destroy(input.el);
    this.draw(input);
  }

  destroy(el) {
    d3.select(el).selectAll('svg').remove();
  }

  draw(props) {
    const svgFrame = this.buildZoomPanFrame(props);
    this.processSvgFile(props, svgFrame);
  }

  buildZoomPanFrame(props) {
    const zoomed = () => {
      svg.attr('transform',
                `translate(${d3.event.translate}) scale(${d3.event.scale})`);
    };
    const zoom = d3.behavior.zoom().on('zoom', zoomed);
    const resetZoom = () => {
      svg.transition()
          .duration(props.duration)
          .attr('transform', 'translate(0,0) scale(1)');
      zoom.scale(1).translate([0, 0]);
    };
    const svg = d3.select(props.el)
                  .append('svg')
                  .attr('id', 'svg-file-container')
                  .attr('width', '100%')
                  .attr('height', '100%')
                  .call(zoom)
                  .on('dblclick.zoom', resetZoom)
                  .append('g');
    return svg;
  }

  processSvgFile(props, svgFrame) {
    d3.xml(props.svgPath, (error, svgFile) => {
      if (error) {
        console.warn(error);
        return;
      }
      if (svgFile) {
        this.attachSvgFile(svgFile, svgFrame, props.resize);
      }
    });
  }

  attachSvgFile(svgFile, svgFrame, resize) {
    const svgFileNode = svgFile.getElementsByTagName('svg')[0];
    if (resize) {
      svgFileNode.setAttribute('width', '100%');
      svgFileNode.setAttribute('height', '100%');
    }
    svgFrame.node().appendChild(svgFileNode);
  }
}

const D3SvgFileZoomPan = new D3SvgFileEngine();

export { D3SvgFileZoomPan };
