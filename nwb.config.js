module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: false
  },
  webpack: {
    rules: {
      babel: {
        test: /\.js(x?)$|\.ts(x?)$/
      }
    },
    extra: {
      resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", "index.js", ".json"]
      }
    }
  }
};
