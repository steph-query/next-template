import React from 'react'
import styled from 'styled-components'
import withAuth from '../lib/withAuth'

class AuthenticatedContent extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

export default withAuth(AuthenticatedContent)
