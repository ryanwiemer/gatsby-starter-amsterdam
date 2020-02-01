module.exports = {
  siteMetadata: {
    title: 'John Doe',
    description:
      'John Doe is a lifestyle photographer based in San Francisco, CA',
    url: 'https://gatsby-starter-amsterdam.netlify.com',
    author: 'John Doe',
    image: 'https://gatsby-starter-amsterdam.netlify.com/og-image.jpg',
    intro: 'John Doe is a lifestyle photographer based in San Francisco, CA',
    menuLinks: [
      {
        name: 'John Doe',
        slug: '/',
      },
      {
        name: 'Example Page',
        slug: '/example/',
      },
    ],
    footerLinks: [
      {
        name: 'Gatsby Theme Amsterdam',
        url: 'https://github.com/ryanwiemer/gatsby-theme-amsterdam',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Theme Amsterdam`,
        short_name: `Amsterdam`,
        background_color: `#f5f0eb`,
        theme_color: `#f5f0eb`,
        start_url: `/`,
        display: `standalone`,
        icon: require.resolve('./src/images/favicon.png'),
      },
    },
  ],
}
