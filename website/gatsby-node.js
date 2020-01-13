const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        "react-dom": "@hot-loader/react-dom",
        "react-helmet": path.join(__dirname, "./src/components/Helmet"),
        $components: path.join(__dirname, "./src/components"),
        $images: path.join(__dirname, "./src/images"),
        $lib: path.join(__dirname, "./src/lib"),
        $pages: path.join(__dirname, "./src/pages"),
        $src: path.join(__dirname, "./src"),
        $styles: path.join(__dirname, "./src/styles"),
        $templates: path.join(__dirname, "./src/templates")
      }
    }
  });
};
