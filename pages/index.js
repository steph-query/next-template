import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Page from '../components/Page'
import AuthenticatedContent from '../components/AuthenticatedContent'

const StyledDiv = styled.div`
  font-family: ${props => props.theme.fonts.primary};
`

class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    return {}
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <Page>
        <StyledDiv>Hello world!</StyledDiv>
        <AuthenticatedContent>Hello, secret content!</AuthenticatedContent>
      </Page>
    )
  }
}

export default connect()(Index)
