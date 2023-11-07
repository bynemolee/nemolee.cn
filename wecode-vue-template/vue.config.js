const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = function() {
  // 获取app相关信息
  const env = process.env.NODE_ENV;
  const wecodeEnv = process.env.WECODE_ENV || 'prod';
  const isProd = env === 'production';

  // 除 test 环境外需要拷贝 common 文件夹
  if (env !== 'test') {
    const { copyCommon } = require('@wecode/wlk-cli');
    copyCommon({ path: 'build/common' });
  }

  return {
    parallel: require('os').cpus().length > 1,
    // 非生产环境禁止 lint
    lintOnSave: isProd,
    // 生产环境禁止sourcemap
    productionSourceMap: false,
    // 对应webpack中的output.publicPath
    publicPath: isProd ? '../' : `/apps/123456789012345/${wecodeEnv}`,
    // 对应webpack中的output.path
    outputDir: resolve(`build/apps/123456789012345/${wecodeEnv}`),
    pages: {
      index: {
        // 入口js
        entry: 'src/main.js',
        // 模板路径
        template: 'src/index.html',
        filename: 'html/index.html',
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Hello World',
        // 在这个页面中包含的块，默认情况下会包含提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'index'],
        vconsole: true
      }
    },
    devServer: {
      port: 8081,
      host: 'localhost',
      contentBase: resolve('build'),
      open: true,
      openPage: 'html/index.html',
      disableHostCheck: true
    },
    configureWebpack: {
      resolve: {
        alias: {
          '@': resolve('/src'),
          common: resolve('/src/common')
        }
      }
    }
  };
};
