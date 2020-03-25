module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: false
  },
  webpack: {
    config(config) {
      config.entry = {
        demo: ["./demo/src/index.js"]
      };
      config.resolve.extensions = [".ts", ".tsx", ".js", ".jsx", ".json"];
      config.module.rules.push({
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
        // loader: "ts-loader"
      });

      return config;
    }
  }
};
