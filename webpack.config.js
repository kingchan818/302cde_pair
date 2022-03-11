const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'src/class')],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        publicPath: 'public/dist/',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/dist'),
    },
};
