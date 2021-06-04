
const path = require('path');

module.exports = {
    entry: {
        pageOne: '/index.js',
        pageTwo: '/index2.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    }

}