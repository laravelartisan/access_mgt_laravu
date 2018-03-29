let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
 output: {
  chunkFilename: 'js/chunks/[name].js',
 },
});

mix.js('resources/assets/src/app.js', 'public/js')
    .sass('resources/assets/css/logic/logic.scss', 'public/css');
