const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin("define").tap(definitions => {
      definitions[0]["process.env"]["PACKAGE_VERSION"] = JSON.stringify(
        require("./package.json").version,
      );
      return definitions;
    });
  },
})
