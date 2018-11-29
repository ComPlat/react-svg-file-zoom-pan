# React Svg File Zoom-Pan Component

You can use this npm package in your React.js for:

1. display an external SVG file as a React.js component.

2. zoom & pan the SVG using D3.js.


### 1. INSTALL

```
npm i react-svg-file-zoom-pan --save
```

### 2. GETTING STARTED

```svgPath```: an URL, which is the link of your external SVG file.

```duration```: a number, which is the time of the transition to the original SVG size when double-clicking.

```resize```: a bool, which set wheter you want to set SVG attributes to ```width: '100%', height: '100%'```

```javascript
import SvgFileZoomPan from 'react-svg-file-zoom-pan';

const my_path = "https://upload.wikimedia.org/wikipedia/commons/e/e4/World_Map_Blank_-_with_blue_sea.svg";

<SvgFileZoomPan
  svgPath={my_path}
  duration={300}
  resize
/>
```

[Demo](https://ComPlat.github.io/react-svg-file-zoom-pan)

### 3. LICENSE

[LICENSE](./LICENSE)

### 4. REFERENCE

http://bl.ocks.org/sgruhier/1d692762f8328a2c9957

http://bl.ocks.org/mbostock/1014829

http://stackoverflow.com/questions/21209549/embed-and-refer-to-an-external-svg-via-d3-and-or-javascript
