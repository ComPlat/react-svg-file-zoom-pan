# React Svg File Zoom Pan

You can use this package in your react.js for:

1. display an external SVG file / SVG string as a react.js component.

2. zoom & pan the SVG using D3.js.


### 1. INSTALL

```
$ yarn add react-svg-file-zoom-pan
```

### 2. GETTING STARTED

##### run storybook to see demo

```
$ yarn install
$ yarn start
```

##### usage

```svgPath```: an URL, which is the link of your external SVG file.

```svg```: a string, which is the SVG content

Please input via ```svgPath``` or ```svg```.

```duration```: a number, which is the time of the transition to the original SVG size when double-clicking.

```resize```: a bool, which set wheter you want to set SVG attributes to ```width: '100%', height: '100%'```


### 3. TEST

unit tests

```
$ yarn test
```

end-to-end tests

```
$ yarn start
$ yarn e2e
```

### 4. LICENSE

[LICENSE](./LICENSE)

### 5. REFERENCE

http://bl.ocks.org/sgruhier/1d692762f8328a2c9957

http://bl.ocks.org/mbostock/1014829

http://stackoverflow.com/questions/21209549/embed-and-refer-to-an-external-svg-via-d3-and-or-javascript
