module.exports = function () {
  return {
    plugins: [
      require('postcss-easy-import')({
        'glob': true
      }),
      require('autoprefixer')({
        'browserslist': [
          'Android >= 4.2',
          'iOS >= 8'
        ]
      }),
      require('postcss-extend')({}),
      require('postcss-sassy-mixins')({}),
      require('postcss-custom-properties')({}),
      require('postcss-nested')({}),
      require('postcss-plugin-bem-escape-block-name-less-modifier')({}),
      require('postcss-assets')({}),
      require('cssnano')({
        'reduceIdents': false,
        'zindex': false
      })
    ]
  }
};