import React from "react"
import { connect } from "react-redux"

class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    return {}
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return <div />
  }
}

export default connect()(Index)
