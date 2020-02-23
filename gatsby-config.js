module.exports = {
  siteMetadata: {
    title: `Caution Creation`,
    description: `Caution Creation is proud to provide the most streamlined web development services in the edmonton Area.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
		{
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /*{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },*/
		{
	    resolve: `gatsby-source-strapi`,
	    options: {
	      apiURL: `https://cautioncreation-backend.herokuapp.com`,
	      queryLimit: 1000, // Default to 100
	      contentTypes: [`article`, `user`, 'portfolio', 'testimonial', 'question'],
	    },
		},
  ],
}
