const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://swm14-backend2-jakyk.run.goorm.io/',
            changeOrigin: true,
        })
    );
};