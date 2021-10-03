const config = require("./src/data/config");
const path = require("path");

require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: config.defaultTitle,
    description: config.defaultDescription,
    author: config.author,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: config.url,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 200
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.defaultTitle,
        short_name: "gpoauto",
        start_url: "/",
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icon: "./static/gpo-favicon.svg",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `illustrations`,
        path: `${__dirname}/src/assets/illustrations`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-offline`,
    },
    `gatsby-plugin-preact`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    
  ],
};

