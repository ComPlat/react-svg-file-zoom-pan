/* eslint-disable no-unused-vars, import/no-extraneous-dependencies, react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import SvgWrapper from './components/svg_wrapper';

class SvgFileZoomPan extends React.Component {
  constructor(props) {
    super(props);

    this.main = new SvgWrapper();
    this.d3Ref = React.createRef();
  }

  componentDidMount() {
    const {
      svgPath, svg, duration, resize,
    } = this.props;

    const el = this.d3Ref.current;
    this.chart = this.main.create({
      svgPath,
      svg,
      duration,
      resize,
      el,
    });
  }

  componentDidUpdate(prevProps) {
    const {
      svgPath, svg, duration, resize,
    } = this.props;

    const el = this.d3Ref.current;
    this.main.update({
      svgPath,
      svg,
      duration,
      resize,
      el,
    });
  }

  componentWillUnmount() {
    const el = this.d3Ref.current;
    this.main.destroy(el);
  }

  render() {
    return (
      <div
        className="svg-file-zoom-pan"
        ref={this.d3Ref}
      />
    );
  }
}

SvgFileZoomPan.propTypes = {
  svgPath: PropTypes.string,
  svg: PropTypes.string,
  duration: PropTypes.number,
  resize: PropTypes.bool,
};

export default SvgFileZoomPan;
