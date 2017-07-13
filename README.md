# Vue.js Loader
A loader for webpack that merge separate js,css,html files to single vue component file(.vue)

 [![npm package](https://img.shields.io/npm/v/vue-loader.svg?maxAge=2592000)](https://www.npmjs.com/package/vue-loader)

## Install
**requires vue-loader**
```bash
npm i vue-loader
npm i vuejs-loader
```

## When do I need it?
If you want to use vue-loader but want to separate html,css,js files and do not want to make .vue file.

## Usage
Use the loader either via your webpack config or inline.

Must be used with vue-loader.

### Via webpack config

**webpack.config.js**
```js
const path = require('path');
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'YOUR APP PATH'),
                loader: 'vue-loader!vuejs-loader'
            },
        ],
    }
}
```

**In your application**
```js
import component from './app.js';
```


### Inline

**In your application**
```js
import component from './app.js';
```

## How it works
**DIR**
```text
app/
 - app.js
 - app.html
 - app.css
assets/
 - ...
```

**app.js**
```js
export default {
    name: 'app',
    templateUrl: './app.html',
    styleUrl: './app.css',
};
```
After loaded by vuejs-loader become
```html
<script>
export default {
    name: 'app',
    templateUrl: './app.html',
    styleUrl: './app.css',
};
</script>
<template src="./app.html"></template>
<style scoped src="./app.css"></template>
```

## License
The MIT License (MIT)

Copyright (c) 2017 Elevista
