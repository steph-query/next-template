import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

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
    return <StyledDiv>Hello world!</StyledDiv>
  }
}

export default connect()(Index)
