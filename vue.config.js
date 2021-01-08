const path = require ( 'path' )
const webpack = require ( 'webpack' )
const resolve = dir => path.join ( __dirname, dir )
const IS_PROD = [ 'production' ].includes ( process.env.NODE_ENV )
module.exports = {
  publicPath: process.env.VUE_APP_ROUTER_BASE,
  productionSourceMap: false,
  // 配置全局scss文件
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/style/scss/index.scss";`
      }
    }
  },
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.ts',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: process.env.VUE_APP_TITLE,
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    }
  },
  chainWebpack: config => {//修复 HMR(热更新)失效
    config.resolve.symlinks ( true )
    config.resolve.modules.add ( resolve ( 'node_modules' ), resolve ( './src/components' ) )
    // 添加别名
    config.resolve.alias
      .set ( '@', resolve ( 'src' ) )
      .set ( '@icon', resolve ( 'src/assets/icon' ) )
      .set ( '@img', resolve ( 'src/assets/img' ) )
      .set ( '@json', resolve ( 'src/assets/json' ) )
      .set ( '@system', resolve ( 'src/views/system' ) )
      .set ( '@view', resolve ( 'src/views/view' ) )
  },
  configureWebpack: config => {
    config.externals = {
      'vue': 'Vue',
      'vue-class-component': 'VueClassComponent',
      'vue-i18n': 'VueI18n',
      'vue-property-decorator': 'VuePropertyDecorator',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'element-ui': 'ELEMENT',
      'axios': 'axios',
      // 'axios' : 'axios' ,
      // 'echarts' : 'echarts' ,
      // 'file-saver' : 'saveAs' ,
      // 'xlsx' : 'XLSX' ,
      // 'js-md5' : 'md5' ,
      // 'nprogress' : 'NProgress' ,
      // 'vue-count-to' : 'CountTo' ,
      // 'vue-fragment' : 'Fragment' ,
      // 'mockjs' : 'Mock' ,
      // 'vue-splitpane' : 'SplitPane' ,
      // "vue-amap" : "VueAMap" ,
      // "vue-aplayer" : "VueAPlayer" ,
      // "vue-video-player" : "VueVideoPlayer" ,
      // "vue-ueditor-wrap" : "VueUeditorWrap" ,
    }
    // 去除代码中的console
    config.optimization.minimizer[ 0 ].options.terserOptions.compress.drop_console = IS_PROD
    // 保持类名不被压缩
    config.optimization.minimizer[ 0 ].options.terserOptions.keep_fnames = true
  },
  devServer: {
    // overlay : { // 让浏览器 overlay 同时显示警告和错误
    //   warnings : true ,
    //   errors : true
    // } ,
    // open : false , // 是否打开浏览器
    // host : 'localhost' ,
    port: '9981', // 代理断就
    // https : false ,
    hot: true, // 单纯设置为true的时候，如果编译报错，会抛出错误，你重新改成正确的，这个时候又会触发重新编译，整个浏览器会重新刷新！
    hotOnly: true, // 这个也设置的话，如果编译报错，你再改成正确的，重新编译，浏览器不会刷新！区别在于，刷新，有些复现步骤比较复杂的话，刷掉了浏览器，要一步步重新点。
    proxy: {
      '/api': {
        target: 'https://www.easy-mock.com/mock/5bc75b55dc36971c160cad1b/sheets', // 目标代理接口地址
        secure: false,
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        // ws : true , // 是否启用websockets
        pathRewrite: {
          '^/api': '/',
          // 请求地址:"/api/1"
        }
      }
    }
  }
}
