var webpack = require('webpack');
module.exports = {
    //入口文件
    entry:'js/page1/index.js',
    //入口文件输出配置
    output:{
        path:'dist/page1/js',
        filename:'[name].js'
    },
    module:{
        //加载器配置
        loaders:[
            {test:/\.css$/,loader:'style!css'}
        ]
    },
    //其它配置
    resolve:{
        root:'d://testWebpack/src',
        extensions:['','.js','.json','.css'],
        alias:{
        shortName1:'/js/page1/index.js'
        }
    }

}