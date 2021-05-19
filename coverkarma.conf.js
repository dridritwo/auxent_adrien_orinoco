module.exports = function(config) {
    config.set({
        browsers: ['ChromeHeadless'],
        files: [
            { pattern: 'test-context.js', watched: false },
            { pattern: 'test-context-cover.js', watched: false }
        ],
        frameworks: ['jasmine', 'webpack'],
        reporters: ['progress', 'coverage'],
        preprocessors: {
            'test-context.js': ['coverage', 'webpack'],
            'test-context-cover.js': ['coverage', 'webpack'],
        },
        coverageReporter: {
          type : 'text',
          dir : 'coverage/'
        },
        webpack: {
            module: {
                rules: [
                    {
                      test: /\.js$/,
                      exclude: /node_modules/,
                      use: {
                        loader: "babel-loader",
                        options: {
                          presets: ["@babel/preset-env"],
                          plugins: ["@babel/plugin-transform-runtime"],
                        }
                      }
                    },
                    {
                        test: /\.js$|\.jsx$/,
                        use: {
                          loader: 'istanbul-instrumenter-loader',
                          options: { esModules: true }
                        },
                        enforce: 'post',
                        exclude: /node_modules|\.spec\.js$/,
                      }
                  ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        }
    });
};