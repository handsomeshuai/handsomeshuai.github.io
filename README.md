> 请安装idea插件markdown preview阅读下列说明

## Dhome webpack + Vue 前端工程构建方案

## Install

 
+ webpack 建议全局

````
npm install webpack -g
npm install webpack-dev-server -g
````

+ package.json

````
npm install
````


## 项目目录结构 

 \*  表示git可忽略文件
````
   
    - < src >  //项目源文件目录 开发文件
        + < lib > //第三方库/插件文件【不包括vue组件】
        + < common >
            - map 
            - less

        + < components >  // 可复用组件目录，一个组件一个.vue 文件 

        + < views >
            - dh-admin 家开相关管理页面
            - dh-appactivity 短期活动页面
            - dh-apph5 app用页面或者app功能页面
            - ah-appadmin 对app的家开管理页面
      
    - * dev  //本地开发目录 也可以用于测试环境的测试包
    
    - < unity > 发布后的生成目录，一般为线上版本，也可用于测试环境 
    
    - < pub > //可以存放打包上线后的暂存库
    
    - * webapck.config.dev.js
    - * webapck.config.build.js
    - package.json  //项目基本信息，模块依赖关系
    - README.md    //描述
    - ...< 其他附属文件 >
    
````     
  
## webpack.config set

+ enter
+ output
+ module

示例
````
let path = require('path');
let webpack = require('webpack');
let htmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');

let srcPath = './src/views/dh-apph5/myTickets/';
let outputPath = './unity/html5Case2/html/';

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        index: srcPath + 'assets/js/index.js',
        detail: srcPath + 'assets/js/detail.js'
    },
    output: {
        path: path.resolve(outputPath),
        filename: 'assets/[name].js?[hash]',
        publicPath: '/html5Case2/html/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
            {
                test: /\.(less|css)$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: ['css-loader', 'less-loader', 'postcss-loader'],
                    fallback: 'style-loader'
                }),
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|jqeg|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: '1024',
                        name: '[name].[ext]',
                        outputPath: 'imgs/'
                    }
                }]
            },
            {
                test: /\.vue/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        extractCSS: true
                    }
                }]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-withimg-loader'
                }]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __httpHost__: 7
        }),
        new htmlWebpackPlugin({
            template: srcPath + 'index.html',
            filename: 'myCoupon.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            chunks: ['index']

        }),
        new htmlWebpackPlugin({
            template: srcPath + 'detail.html',
            filename: 'detail.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            chunks: ['detail']
        }),
        new ExtractTextWebpackPlugin('assets/main.min.css'),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.min\.css$/g,
            //cssProcessor: require('cssnano'),
            cssProcessorOptions: {discardComments: {removeAll: true}},
            //canPrint: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]，
    devServer: {
             contentBase: './unity/dh-apph5/mytickets',
             // historyApiFallback: true,
             // hot: true,
             // inline: true,
             // progress: true,
             // proxy: {
             //     '/base/card/': {
             //         target: 'http://218.205.115.242:18080/',
             //         host: 'http://218.205.115.242:18080/',
             //         changeOrigin: true,
             //         secure: false
             //     }
             // }
     
         }
};


````


# 关于GIT

####  GIT设置


````
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
````


#### 初始化本地库
````
git init
````
#### add 与 comit

使用命令git add <file> 添加

>  git add -A  提交所有变化

>  git add -u  提交被修改(modified)和被删除(deleted)文件，不包括新文件(new)

>  git add .  提交新文件(new)和被修改(modified)文件，不包括被删除(deleted)文件

使用命令git commit

````
git commit -m "test"
````

#### git status  与 git diff

#### git log
> 为什么git 不用递增数字做版本号

#### 回退 git reset --hard HEAD^

#### git reflog 查看历史命令

#### git checkout -- <file> 回到最近一次git commit或git add时的状态。

#### git rm 删除

> 以上所有历史记录操作均可由idea的相关功能替换，

> local histroy  | git history  | revert 

## git remote
````
git remote add origin git@server-name:path/repo-name.git
git push -u origin master  //第一次推送master分支的所有内容
git push origin master //以后每次使用
````

## git分支

本地 master 主干分支
几个主要命令：
````
git branch dev // 创建分支

git checkout dev //切换分支

git checkout -b dev  //创建并切换

git branch //查看所有分支

git merge dev //合并分支
//Git用<<<<<<<，=======，>>>>>>>标记出不同分支的内容

git branch -d dev //删除分支
````


常用分支
- master 稳定分支 与 远程资源库同步
  + dddd
    - dasf
- dev 开发分支
- bug 分支
- feature 实验性分支

> 分支用完记得删除，不然同步也是一项工作

