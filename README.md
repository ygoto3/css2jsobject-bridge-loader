# css2jsobject-list-loader
A Webpack loader to convert css to JavaScript object through a list file

## Usage

You need a list file that tells paths to css files.

./csspaths

```
./style.css
./style2.css
```

The css files are regular css contents.


./style.css

```
.list { background-color: #ff00ff; }
#item { font-size: 10px; }
```

./style2.css

```
.list { background-color: red; display: block; }
```

You can get a JavaScript object whose properties and values are simply equivalent to css contents through `css2jsobject-bridge-loader`.


```
const stylesAsJsObject = require('css2jsobject-bridge!./csspaths');
```

and below is the result.

```
{
  ".list": {
    "background-color": "red",
    "display": "block"
  },
  "#item": {
    "font-size": "10px"
  }
}
```

## Requirement

* Node.js v6.3.0~
