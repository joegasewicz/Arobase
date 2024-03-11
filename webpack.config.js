const path = require("path");

module.exports =  function(env, argv) {
    return {
        mode: env.mode ? "production" : "development",
        entry: "./src/index.ts",
        devtool: "inline-source-map",
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: "ts-loader",
                    exclude: [
                        /node_modules/,
                        path.resolve(__dirname, "./examples"),
                        path.resolve(__dirname, "./tests"),
                    ],
                }
            ],
        },
        resolve: {
            extensions: [".ts", ".js", ".png"],
        },
        output: {
            filename: argv["output-filename"],
            path: path.resolve(__dirname, "lib/index.js"),
            library: "arobase",
            libraryTarget: "commonjs2",
        },
    };
};