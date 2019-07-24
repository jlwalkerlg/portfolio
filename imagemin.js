/* eslint-disable */
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminSvgo = require('imagemin-svgo');
const imageminGifsicle = require('imagemin-gifsicle');

imagemin(['assets/img/*.{jpg,svg,gif}'], {
  destination: 'src/img',
  plugins: [
    imageminMozjpeg(),
    imageminSvgo({
      plugins: [{ removeViewBox: false }],
    }),
    imageminGifsicle(),
  ],
}).then(files => console.log('Finished!', files));
