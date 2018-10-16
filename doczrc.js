import { css } from 'docz-plugin-css';

export default {
  title: 'Peer-UI',
  typescript: true,
  src: './src/',
  dest: './docs/',
  hashRouter: true, // to enable deployment on gh-pages
  plugins: [
    css({
      preprocessor: 'sass'
    })
  ]
};
