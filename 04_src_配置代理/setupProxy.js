const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api1', {     //此前缀的请求一律走代理
            target: 'http://localhost:5000',  //请求转发给谁
            changeOrigin: true,              //默认值为false,控制服务器收到的响应头中Host的值
            pathRewrite: {'^/api1': ''}      //重写请求路径
        }),
        createProxyMiddleware('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {'^/api2': ''}
        })
    );
}