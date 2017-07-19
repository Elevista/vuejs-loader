# Vue.js Loader
A wrapper loader of vue-loader for .js file

 [![npm package](https://img.shields.io/npm/v/vue-loader.svg?maxAge=2592000)](https://www.npmjs.com/package/vue-loader)

## Install
**requires vue-loader installed**
```bash
npm i vuejs-loader
```

## When do I need it?
If you want to use vue-loader but do not want to make .vue file and want to separate html,css,js files.

## Usage
Use the loader either via your webpack config or inline.

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
                loader: 'vuejs-loader'
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
import component from 'vuejs-loader!./app.js';
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
```js
import component from 'vuejs-loader!./app.js';
```
imported component object equals below

**app.vue**
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
```js
import component from 'vue-loader!./app.vue';
```


## License
The MIT License (MIT)

Copyright (c) 2017 Elevista
