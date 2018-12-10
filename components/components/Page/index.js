import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import PageContent from './PageContent'
import Meta from './Meta'

const LayoutDiv = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`

class Page extends React.Component {
  render() {
    return (
      <LayoutDiv>
        <Meta />
        <Header />
        <PageContent>{this.props.children}</PageContent>
      </LayoutDiv>
    )
  }
}

export default Page
