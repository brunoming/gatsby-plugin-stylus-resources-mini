exports.onCreateWebpackConfig = ({
  actions
}, options) => {
  actions.setWebpackConfig({
    module: {
      rules: [{
        test: /\.styl$/,
        loader: "sass-resources-loader",
        options: {
          resources: options.resources
        }
      }]
    }
  });
};