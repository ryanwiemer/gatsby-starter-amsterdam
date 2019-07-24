module.exports = {
  siteMetadata: {
    title: 'John Doe',
    author: 'John Doe',
    description: 'John Doe is a photographer',
    intro: 'John Doe is a lifestyle photographer based in San Francisco, CA',
    menuLinks: [
      {
        name: 'Gatsby Theme Amsterdam',
        slug: '/',
      },
      {
        name: 'Example',
        slug: '/example/',
      },
    ],
    footerLinks: [
      {
        name: '@ryanwiemer',
        url: 'https://twitter.com/ryanwiemer',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/ryanwiemer/gatsby-theme-amsterdam',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {},
    },
  ],
}
