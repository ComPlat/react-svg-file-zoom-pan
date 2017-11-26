import React from 'react';
import ReactDOM from 'react-dom';
import { D3SvgFileZoomPan } from './D3SvgFileZoomPan';

export default class SvgFileZoomPan extends React.Component {
  componentDidMount() {
    D3SvgFileZoomPan.create({
      svgPath: this.props.svgPath,
      svg: this.props.svg,
      duration: this.props.duration,
      resize: this.props.resize,
      el: this.getDOMNode(),
    });
  }

  componentWillReceiveProps(nextProps) {
    D3SvgFileZoomPan.update({
      svgPath: nextProps.svgPath,
      svg: nextProps.svg,
      duration: this.props.duration,
      resize: nextProps.resize,
      el: this.getDOMNode(),
    });
  }

  componentWillUnmount() {
    D3SvgFileZoomPan.destroy(this.getDOMNode());
  }

  getDOMNode() {
    return ReactDOM.findDOMNode(this);
  }

  render() {
    return (
      <div className="svg-file-container" />
    );
  }
}

SvgFileZoomPan.propTypes = {
  svgPath: React.PropTypes.string,
  svg: React.PropTypes.string,
  duration: React.PropTypes.number,
  resize: React.PropTypes.bool,
};
