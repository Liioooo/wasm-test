const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: [
        './src/worker/worker.ts'
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    'ts-loader'
                ],
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new ProgressBarPlugin()
    ],
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'worker.js',
        path: path.resolve(__dirname, 'assets')
    }
};
