const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: './',
    configureWebpack: {
        entry: process.env.NODE_ENV === 'development' ? './src/main.js' : './index.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'vue-marquee-bar.js',
            library: 'vue-marquee-bar',
            libraryTarget: "umd",
            umdNamedDefine: true
        }
    }
}
