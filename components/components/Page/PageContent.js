import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`
class PageContent extends React.Component {
  render() {
    return <ContentContainer>{this.props.children}</ContentContainer>
  }
}

export default PageContent
