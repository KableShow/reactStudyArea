# reactStudyArea
study React by using webpack-dev-server and react-hot-loader

##创建一个方便学习React的测试环境
* 使用webpack打包
* 使用webpack-dev-server和react-hot-loader动态显示修改

##安装方式
```
npm install
```

##使用方式
```
node server.js
```

##可能遇到的问题
#### 1）修改了组件却没有热加载，即浏览器并没有自动更新
开启服务器，显示正常，但是修改组件后，浏览器并没有改变<br/>
在浏览器开发者工具中可以看到这样的输出：<br/>
[HMR] The following modules couldn't be not hot updated: (They would need a full reload!) <br/>
[HMR]  - 75 <br/>

这个可能是因为你将组件的定义写在了入口文件里面，导致无法更新。<br/>
解决方法： 将组件定义分离成一个独立模块。<br/>

想了解更多关于React-hot-loader问题的解决方法请访问：<br/>
https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md
