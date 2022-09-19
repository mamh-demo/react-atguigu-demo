const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api1', {// 遇见 /api1 前缀的路径 才会走这个 代理
            target: 'http://localhost:5000',
            changeOrigin:true,
            pathRewrite:{
                "^/api1":""
            }
        }),
        createProxyMiddleware('/api2', {
            target: 'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{
                "^/api2":""
            }
        }),
    );
};

