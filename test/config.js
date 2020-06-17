const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './test_pro/a.js'),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: path.resolve(__dirname, '../dist/addName')
                }
            },
        ]
    }
}