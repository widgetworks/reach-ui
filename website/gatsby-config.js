const path = require("path");

// TODO: Import JS variables for sass data
/* const baseTheme = require("./src/lib/baseTheme");

function themeToSass(theme) {
  let variables = Object.entries(theme).reduce((sassData, [key, value]) => {
    return `${sassData}\n\t--${key}: ${value};`;
  }, "");
  return `:root {${variables}\n}`;
} */

module.exports = {
  pathPrefix: "/reach-ui/",
  siteMetadata: {
    title: "Reach UI",
    description:
      "The accessible foundation of your React apps and design systems.",
    author: "@reacttraining"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-121796914-2"
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: require.resolve("./src/components/mdx/MDXLayout.js")
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images"
          },
          {
            resolve: "gatsby-remark-emoji"
          },
          {
            resolve: "gatsby-remark-slug"
          }
        ]
      }
    },
    /* {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: `${__dirname}/../packages`,
        ignore: ["examples/**", "es/**", "umd/**"]
      }
    }, */
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "reach-ui",
        short_name: "reach-ui",
        start_url: "/",
        background_color: "#1159a6",
        theme_color: "#1159a6",
        display: "minimal-ui",
        icon: "src/images/reach-icon.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({
            stage: 2,
            features: {
              "custom-properties": true,
              "custom-media-queries": true,
              "custom-selectors": true
            }
          })
        ]
      }
    }
  ]
};
