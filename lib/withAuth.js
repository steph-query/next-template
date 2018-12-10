import React from 'react'
import { connect } from 'react-redux'

function withAuth(Component) {
  class AuthenticatedComponent extends React.Component {
    render() {
      return (
        <div>
          {this.props.isAuthenticated && (
            <Component {...this.props}>{this.props.children}</Component>
          )}
        </div>
      )
    }
  }

  function mapStateToProps(state, ownProps) {
    return {
      isAuthenticated: state.user.isAuthenticated,
      ...ownProps,
    }
  }

  return connect(mapStateToProps)(AuthenticatedComponent)
}

export default withAuth
