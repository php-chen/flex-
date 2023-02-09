// vue.config.js
const path = require('path') // 引入

function resolve(dir) {
    return path.join(__dirname, dir) //path.join(__dirname) 设置绝对路径
}
module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Flex布局调试' // HTML标题
                return args
            })
    },
    // publicPath: '/flex/', // 服务器访问文件的路径
    publicPath: '/', // 服务器访问文件的路径
    productionSourceMap: false,// 取消Map打包
    runtimeCompiler: true,

    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('./src'))
    }

}