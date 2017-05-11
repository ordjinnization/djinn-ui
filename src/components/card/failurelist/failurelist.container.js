/**
 *
 */
'use strict';
import {expect} from 'chai';
import React from 'react';
import {connect} from 'react-redux';
import DjinnCard from '../djinncard.component';
import {requestLatest} from './action';
import FailureList from './failurelist.component';

class FailureListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestLatest();
  }

  render() {
    const data = this.props.latestFailures;
    return <DjinnCard>
      {data.hasError ? <div>Error occurred.</div> :
        <FailureList failures={this.props.latestFailures.failures} />}
    </DjinnCard>;
  }
}


const mapStateToProps = (state) => {
  return {
    latestFailures: state.latestFailures,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestLatest: () => dispatch(requestLatest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FailureListContainer);
