const path = require("path");
const prod = process.argv.includes('prod');

const source = path.join(__dirname, "src")

module.exports = {
    mode: prod? "production": "development",
    entry: path.join(source, "Element.ts"),
    devtool: prod?  undefined: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: [
                    /node_modules/,
                    /src/
                ]
            },
        ],
    },
    output: { 
        filename: 'Element.js',
        path: source,
    },
    optimization: {
        minimize: prod,
    }
}