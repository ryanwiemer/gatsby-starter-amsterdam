import React from 'react'
import Container from 'gatsby-theme-amsterdam/src/components/Container'
import Content from 'gatsby-theme-amsterdam/src/components/Content'
import SEO from 'gatsby-theme-amsterdam/src/components/SEO'

const ExamplePage = ({ data }) => {
  return (
    <Container>
      <SEO
        title="Example Page"
        description="This is an example of a regular page"
      />
      <Content>
        <h1>Example Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tristique, lacus sed suscipit mattis, arcu ipsum convallis diam, eu
          egestas ligula tellus sed mi. Pellentesque posuere justo sit amet
          congue pretium. Nulla tincidunt interdum leo, in tempor lectus
          pellentesque sit amet. Vivamus ut eros et eros iaculis lacinia at vel
          purus. Curabitur condimentum augue sit amet risus tincidunt, vel
          facilisis odio pharetra. Cras ex sem, porta in eleifend sed, ultricies
          ultricies elit. Fusce massa urna, ornare eget velit non, dignissim
          ullamcorper ipsum. Suspendisse vitae tincidunt lorem. Maecenas sodales
          lorem mauris, eget bibendum lorem pharetra sed. Curabitur congue
          tristique enim, et venenatis risus commodo at. Sed laoreet, nunc id
          lacinia dignissim, nulla neque facilisis libero, id porttitor ligula
          lectus sit amet quam. Vivamus mollis lacus et dui lobortis, ac
          elementum tortor iacu
        </p>
        <p>
          pulvinar. Nam ac ultrices augue, id finibus ligula. Ut ut est a felis
          volutpat finibus eu quis justo. Phasellus tincidunt rutrum bibendum.
          Suspendisse eu mauris in sem vestibulum euismod. Quisque tincidunt,
          justo vitae tincidunt facilisis, libero lacus eleifend elit, in
          rhoncus arcu nulla facilisis purus. Maecenas condimentum luctus
          ligula, sit amet sodales risus sagittis nec. Aliquam erat volutpat.
          Curabitur vel porttitor quam.
        </p>
      </Content>
    </Container>
  )
}

export default ExamplePage
