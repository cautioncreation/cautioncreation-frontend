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
		{
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
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
        name: `markdown`,
        path: `${__dirname}/static/cms`,
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
		{
	    resolve: `gatsby-source-strapi`,
	    options: {
	      apiURL: `https://cautioncreation-backend.herokuapp.com`,
	      queryLimit: 100, // Default to 100
	      contentTypes: [`article`, `user`, 'portfolio', 'testimonial', 'question'],
	    },
		},
  ],
}
