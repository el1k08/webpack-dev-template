<div align="center">
  <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg"><img width="200" height="200" src="https://vuejs.org/images/logo.png">
  <h1>Webpack + Vue.js DEV  Template</h1>
  <p>
    Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
  </p>
  <p>Author: <a href="https://www.linkedin.com/in/elislavutski/" target="_blank">Eli Slavutski</a></p>
</div>

## Build Setup:

``` bash
# Download repository:
git clone https://github.com/el1k08/webpack-dev-template

# Go to the app:
cd webpack-template

# Install dependencies:
npm install

# Server with hot reload at http://localhost:8081/
npm run dev

# Output will be at dist/ folder
npm run build
```

## Main const:
Easy way to move all files.
Default:
``` js
const PATHS = {
  // Path to main app dir
  src: path.join(__dirname, '../src'),
  // Path to Output dir
  dist: path.join(__dirname, '../dist'),
  // Path to Second Output dir (js/css/fonts etc folder)
  assets: 'assets/'
}
```

## Import Another libs:
1. Install libs
2. Import libs in `./index.js`
``` js
// React example
import React from 'react'
// Bootstrap example
import Bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
```

## Import only SASS or CSS libs:
1. Install libs
2. Go to `/assets/scss/utils/libs.scss`
3. Import libs in node modules
``` scss
// Sass librarys example:
@import '../../node_modules/spinners/stylesheets/spinners';
// CSS librarys example:
@import '../../node_modules/flickity/dist/flickity.css';
```

## Import js files:
1. Create another js module in `./js/` folder
2. Import modules in `./js/index.js` file
``` js
// another js file for example
import './common.js'
```


## Packages

- [Webpack](https://webpack.js.org/)
- - webpack
- - webpack-cli
- - webpack-dev-server
- - webpack-merge

- - path

- [BabelJS](https://babeljs.io/)
- - @babel/core
- - @babel/preset-env
- - babel-loader

- CSS/SASS Loaders
- - [Mini Css Extract Plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)
- - css-loader
- - style-loader
- - sass-loader
- - node-sass

- [PostCSS](https://postcss.org/)
- - postcss-loader
- - autoprefixer
- - css-mqpacker
- - cssnano

- [Vue.js](https://vuejs.org/)
- - vue-loader
- - vue-style-loader
- - vue-template-compiler
- - vuex

## License
[MIT](https://choosealicense.com/licenses/mit/)