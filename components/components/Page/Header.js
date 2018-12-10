import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}

Router.onRouteChangeError = () => {
  NProgress.done()
}

const StyledHeader = styled.div``

class Header extends React.Component {
  render() {
    return <StyledHeader />
  }
}

export default Header
