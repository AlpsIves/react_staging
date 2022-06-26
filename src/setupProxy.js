const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {     //此前缀的请求一律走代理
            target: 'http://localhost:5000',  //请求转发给谁
            changeOrigin: true,              //默认值为false,控制服务器收到的响应头中Host的值
            pathRewrite: {'^/api': ''}      //重写请求路径
        })
    );
}