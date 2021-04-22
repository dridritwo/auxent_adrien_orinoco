module.exports = function(config) {
    config.set({
        browsers: ['ChromeHeadless', 'PhantomJS'],
        files: [
            { pattern: 'test-context.js', watched: false }
        ],
        frameworks: ['jasmine', 'webpack'],
        preprocessors: {
            'test-context.js': ['webpack']
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
                          plugins: ["@babel/plugin-transform-runtime"]
                        }
                      }
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