// webpack.mix.js

let mix = require('laravel-mix');

mix
    .js('src/app.js', 'dist')
    .js('src/app.scss', 'dist');
    
    // .setPublicPath('dist');