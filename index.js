const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS

// Proxy all requests to the backend
app.use('/', createProxyMiddleware({
    target: 'http://13.210.103.78', // Your backend server
    changeOrigin: true,  // Avoids CORS issues
    logLevel: 'debug',   // Logs requests for debugging
}));

// Use the PORT environment variable provided by Render
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Reverse proxy running on port ${port}`);
});