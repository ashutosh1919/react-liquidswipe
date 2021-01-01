module.exports = {
  siteMetadata: {
    title: "Apple Clay Devices Showcase",
    siteUrl: "https://liquidswipe.netlify.app",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: [
            "SF Pro Display Bold, SF Pro Display Light, SF Pro Display Semibold",
          ],
          urls: ["src/static/fonts/fonts.css"],
        },
      },
    },
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-158726526-1",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-transformer-sharp",
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data/`,
      },
      __key: "data",
    },
  ],
};
