# css2jsobject-bridge-loader
A webpack loader to convert css to JavaScript object through a list file

## Usage

~~You need a list file tells paths to css files.~~

You need a list file tells a path to a css file.

```
./style.css
```

The css files are regular css contents.


```
.list { background-color: #ff00ff; }
#item { font-size: 10px; }
```

You can get a JavaScript object whose properties and values are simply equivalent to css contents through `css2jsobject-bridge-loader`.


```
const stylesAsJsObject = require('css2jsobject-bridge!./stylepath');
```

and below is the result.

```
{
  ".list": {
    "background-color": "#ff00ff"
  },
  "#item": {
    "font-size": "10px"
  }
}
```