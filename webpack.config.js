const path = require('path');
module.exports = {
    entry: './src/app.ts',
    output: {
        filename: './dist/bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            },
        ],
    },
};
