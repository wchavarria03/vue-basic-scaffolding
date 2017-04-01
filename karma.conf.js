// Karma configuration
module.exports = function (config) {
  let browsers = config.singleRun ? ['PhantomJS'] : ['Chrome', 'PhantomJS'];

  config.set({
    files: [
      // [UNIT TEST FILES]
      { pattern: 'test/unit/**/*.spec.js', watched: false }
    ],

    preprocessors: {
      // add webpack as preprocessor
      // 'app/**/*.vue': ['coverage']
      'test/unit/**/*.spec.js': ['webpack']
    },

    browsers: browsers, // 'Chrome', 'PhantomJS'
    reporters: ['spec', 'coverage'], // 'progress', 'spec', 'coverage'
    webpack: require('./webpack.config'),
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },
    frameworks: ['jasmine'],
    plugins: [
      // Launchers
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',

      // Test Libraries
      'karma-jasmine',

      // Preprocessors
      'karma-webpack',
      'karma-sourcemap-loader',

      // Reporters
      'karma-spec-reporter',
      'karma-coverage'
    ],
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'text-summary' }
      ]
    }
  });
};
