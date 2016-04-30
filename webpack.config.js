module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: __dirname,
        filename: "build/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader" }
        ]
    }
};
