let proxyobj = {};

proxyobj['/'] = {
  ws: false,
  target: 'http://localhost:8081',
  changeOrigin: true,
  pathRewrite: {
    '^/': ''
  }
};
module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    proxy: proxyobj
  }
};
