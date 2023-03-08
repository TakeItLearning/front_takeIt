const cors_proxy = require('cors-anywhere');

const server = cors_proxy.createServer({
  originWhitelist: [], // allow all origins
  requireHeader: [],
  removeHeaders: ['cookie', 'cookie2']
});

server.listen(8080, () => {
  console.log('CORS Anywhere server running on port 8080');
});
