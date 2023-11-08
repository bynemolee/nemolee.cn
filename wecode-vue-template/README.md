# wecode-vue-template

wecode-vue-template是基于 vue-cli3.0 制作的We码开发模板，符合 WLK-CLI 集成规范，允许开发者自由定制。

## 项目目录结构

```shell
|—— build
│   ├── common                         // JS API公共文件目录
          ├── /html/                   // html文件
          ├── /js/                     // JS API脚本文件
          ├── /css/                    // 公共组件库样式文件
          ├── /assets/                 // 资源目录
               ├── /images/            // 公共图片资源
               ├── /media/             // 公共媒体资源
│   └── apps                           // 开发的We码应用包文件目录
          ├── /123456789012345/        // 应用名称
               ├── /production/        // 应用的构建环境。打包时，cli 会打包该文件夹下的文件
                    ├── /html/         // 应用的html文件
                    ├── /js/           // 应用的js文件
                    ├── /css/          // 应用的css样式文件
├── package.json                       // node相关环境的配置文件
├── public                             // 静态资源目录，内容会直接拷贝到打包目录中
├── scripts                            // 编译相关
├── src                                // 源代码目录
│   ├── common                         // 公共资源，包括 css/js  等
│   ├── components                     // 组件
│   ├── config                         // 配置项，包括 api 等
│   ├── i18n                           // 国际化
│       ├── en_US                      // 英文配置信息
│       └── zh_CN                      // 中文配置信息
│   ├── router                         // 路由
│   ├── store                          // store，页面数据按模块存储
│   ├── utils                          // 提供一些小工具
│   ├── views                          // 页面
│   ├── App.vue                        // 主页
│   ├── index.html                     // 主页 html
│   ├── main.js                        // webpack打包入口
├── test                               // jest测试集
└── vue.config.js                      // vue-cli3.0 配置文件
```

## 使用说明

### 开发流程

请参考开发流程: [开发流程](https://cloudlinkworkplace.huaweicloud.com/wecode/docs/dev/prod/quickstart/developer_cloud.html?v=1547690384)

### 初始化

用 VSCODE 打开项目后，插件会自动进行项目初始化，以保证后续操作的快速和顺滑，该过程包括安装依赖、编译、打包等，因此可能比较耗时，具体时间视机器性能和网络环境而定。

如果初始化卡住或者出错，需要关闭 VSCODE 再重新打开项目，以重新初始化。

如果需要手工输入命令来进行依赖安装，建议使用 yarn，这样速度会比较快，命令为
```
yarn install
```

### 本地调试

点击插件的“本地调试”按钮开始调试，也可以手工输入命令来进行调试，命令为
```
npm run start
```

### 配置appid

手机调试和上传包功能，需要依赖 `appid`。

刚下载的模板中，`plugin.json` 文件中需要替换 `appid` 换成注册应用生成的 `appid`。

### 手机调试

点击插件的“手机调试”来进行We码构建，插件会编译、打包、上传We码，并弹出二维码供手机扫码查看。

### 上传We码

调试好We码后，点击“上传包”上传We码，然后在开放平台页面进行新版本的审核提交。

### 单元测试

```
npm run test:unit
```

### 定制模板

请参考 Vue-cli3.0 文档： [Configuration Reference](https://cli.vuejs.org/config/)