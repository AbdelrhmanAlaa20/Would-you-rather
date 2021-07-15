import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import Outside from './Outside'
import Inside from './Inside'
import { handleInitialData } from '../actions/shared'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser, loadingBar } = this.props;

    if (loadingBar.default === undefined || loadingBar.default === 1) {
      return (
          <Spinner animation="border" role="status" variant="primary" className="my-5" > </Spinner>
      )
    } else {
      return (<Fragment>
      {
        !authedUser ? ( <Outside /> ) : (<Inside /> )
       }
       </Fragment>)
    }
  }
}

const mapStateToProps = ({ authedUser, loadingBar }) => {
  return {
    authedUser,
    loadingBar
  }
}

export default connect(mapStateToProps)(App)
