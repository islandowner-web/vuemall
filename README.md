# V-Mall  
### 基于Vue全家桶开发的移动端商城前端（仅前端）

## 项目说明  
项目名：V-Mall

相关技术：Vue-cli4.2 + Vue 2.6 + Vue-Router + VueX

核心页面：首页，商品详情，购物车，个人中心  

背景与说明：仿了好几个购物App作出来的商城前端Demo，本来想用Django Rest Framwork做后端数据返回接口，然而事情太多+懒就直接选择了Easy Mock作为模拟数据接口，项目整体用Vue-cli构建，Vue-Router实现全局路由，axios发送网络请求，VueX进行全局状态管理（主要用于实现购物车），全方位练习了一次Vue全家桶实现的项目开发。

重要说明：5月2号之后Easy Mock的服务极为不稳定，官网一天起码20小时打不开，数据也无法响应，若下载部署后无法使用，请尝试进入Easy Mock官网，若可成功进入则项目可以正常使用，若无法成功进入请稍后再试。

图片，评论等数据来源：[京东移动端](https://m.jd.com/) ，如有侵权请立刻联系删除

项目中使用的第三方服务、插件与开源项目：  
[Easy Mock专业模拟数据的持久化服务 --- 用于模拟真实数据返回](https://www.easy-mock.com/)   
[vue-swiper --- 用于轮播图](https://github.com/zwhGithub/vue-swiper)    
[better-scroll --- 用于提高移动端滚动性能](https://github.com/ustbhuangyi/better-scroll)   

## 搭建说明

### Project setup 初始化环境
```
npm install
```

### Compiles and hot-reloads for development 编译运行
```
npm run serve
```

### Compiles and minifies for production 打包
```
npm run build
```


## 效果展示（部分页面）

- 首页 
<img src="/pic/me.png" height='500'>

- 详情页
<img src="/pic/detail.png" height='500'> <img src="/pic/content.png" height='500'>  <img src="/pic/content2.png" height='500'>

- 购物车
<img src="/pic/cart.png" height='500'> 

- 个人中心
<img src="/pic/home.png" height='500'>