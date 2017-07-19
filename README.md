# app

> A Vue.js project

### 引入element-ui
- 修改package.json 里新增"element-ui": "1.3.7"
- 修改main.js => import Element from 'element-ui' => import 'element-ui/lib/theme-default/index.css' => Vue.use(Element);

### 引入字体图标
- npm install font-awesome
- 在main.js里 import 'font-awesome/css/font-awesome.css'

### 使用element-ui loading加载
- 详情见具体页面

## 关于打包字体图标路径不正确的问题解决
- 修改 build => utils.js 设置publicPath
```bash
  // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader', 
        publicPath: '../../'  // 设置路径
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:4000
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
