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
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor,
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID,
        head: true,
      },
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
        name: `illustartions`,
        path: `${__dirname}/src/assets/illustrations`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/pages/*`],
        runtimeCaching: [

          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com/,
            handler: 'cacheFirst',
            options: {
              cacheableResponse: {
                statuses: [0, 200]
              },
              cacheName: 'google-fonts-webfonts',
              expiration: {
                maxAgeSeconds: 60 * 60,
                maxEntries: 30
              }
            }
          },
        ]
      },
    },

  ],
};


/**
 *  github API taken out. Use if you wanna swamp data from your github
 * */

// {
//   resolve: "gatsby-source-graphql",
//   options: {
//     typeName: "GitHub",
//     fieldName: "github",
//     url: "https://api.github.com/graphql",
//     headers: {
//       Authorization: `bearer ${process.env.PORTFOLIO_GITHUB_TOKEN}`,
//     },
//     fetchOptions: {},
//   },
// },

{
  resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
  options: {
    analyzerMode: "server",
    analyzerPort: "8888",
    analyzerHost: "http://localhost",
    defaultSizes: "gzip"
  },
},