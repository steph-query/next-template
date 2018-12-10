import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/withReduxStore'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { theme } from '../utils/styles'

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      </ThemeProvider>
    )
  }
}

export default withReduxStore(MyApp)
