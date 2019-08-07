import React from 'react'
import Container from 'gatsby-theme-amsterdam/src/components/Container'
import Content from 'gatsby-theme-amsterdam/src/components/Content'
import SEO from 'gatsby-theme-amsterdam/src/components/SEO'

const ExamplePage = ({ data }) => {
  return (
    <Container>
      <SEO title="Example Page" description="This is just an example page" />
      <Content>
        <h1>Example Page</h1>
        <p>
          This is just a regular page{' '}
          <a
            href="https://www.gatsbyjs.org/docs/recipes/#creating-pages-automatically"
            target="_blank"
            rel="noopener noreferrer"
          >
            created automatically
          </a>{' '}
          by placing a <code>React</code> component in{' '}
          <code>src/pages/example.js</code>. In the source code you will see an
          example of how to{' '}
          <a
            href="https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/"
            target="_blank"
            rel="noopener noreferrer"
          >
            shadow
          </a>{' '}
          components available in the theme such as the <code>Container</code>,{' '}
          <code>Content</code> and <code>SEO</code> components.
        </p>
        <p>
          For more information about the Gatsby theme powering this website
          visit the{' '}
          <a
            href="https://github.com/ryanwiemer/gatsby-theme-amsterdam"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby Theme Amsterdam GitHub Repo
          </a>
          .
        </p>
      </Content>
    </Container>
  )
}

export default ExamplePage
