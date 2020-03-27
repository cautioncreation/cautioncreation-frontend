module.exports = {
  siteMetadata: {
		siteUrl: `https://cautioncreation.com`,
    title: `Caution Creation`,
    description: `Caution Creation is proud to provide the most streamlined web development services in the edmonton Area.`,
  },
  plugins: [
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-netlify`,
		`gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
		`gatsby-plugin-sitemap`,
		`gatsby-transformer-remark`,
		`gatsby-remark-source-name`,
		{
			resolve: `gatsby-plugin-mailchimp`,
			options: {
				endpoint: `https://cautioncreation.us19.list-manage.com/subscribe/post?u=5beb28088a2412ca5a7539c07&amp;id=42bc8764dd`,
			},
		},
		{
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: `en`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/static/cms/articles`,
      },
    },
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/cms/assets`,
      },
    },
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `authors`,
        path: `${__dirname}/static/cms/authors`,
      },
    },
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `faqs`,
        path: `${__dirname}/static/cms/faqs`,
      },
    },
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolios`,
        path: `${__dirname}/static/cms/portfolios`,
      },
    },
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `testimonials`,
        path: `${__dirname}/static/cms/testimonials`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Caution Creation`,
        short_name: `Caution Creation`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/svg/logo.svg`,
      },
    },
  ],
}
