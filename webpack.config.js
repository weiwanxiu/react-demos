var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',

    entry:  __dirname + "/app/main.js",
    output: {
      path: __dirname + "/build",
      filename: "bundle.js"
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    // devServer: {
    //   contentBase: "./",//本地服务器所加载的页面所在的目录
    //   colors: true,//终端中输出结果为彩色
    //   historyApiFallback: true,//不跳转
    //   inline: true//实时刷新
    // }
    
    //其它解决方案配置
    // resolve: {
    //     src: '/Users/wwx/workspace/react-demos/app/src', //绝对路径
    //     extensions: ['', '.js', '.json', '.scss']
    // }
};