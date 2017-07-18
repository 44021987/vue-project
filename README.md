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
