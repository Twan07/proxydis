const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
//twanhh
const app = express();
app.use("/", createProxyMiddleware({
  target: "https://discord.com",
  changeOrigin: true,
  secure: false
}));

app.listen(8080, () => console.log("Proxy running on :8080"));
