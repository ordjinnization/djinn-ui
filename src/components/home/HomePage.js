/**
 *
 */
'use strict';

import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Heatmap from '../plot/Heatmap';
import {connect} from 'react-redux';
import {requestHeatmap} from '../../actions/index';
import Layout from 'material-ui/Layout';

const STYLE = Object.freeze({
  paddingLeft: 20,
  paddingRight: 20,
});

class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestHeatmap();
  }

  render() {
    let heatMapData = this.props.heatmapData;
    if (Object.keys(heatMapData).length === 0 && heatMapData.constructor === Object) {
      return <div>Loading</div>;
    }
    return (<div style={STYLE}>
      <Layout container >
        <Layout item xs={6}>
          <Paper style={{padding: 20, height: '800px'}}>
            <div style={{whitespace: 'nowrap'}}>
              <h1 style={{float: 'left'}}>Stats!</h1>
              <div style={{float: 'right', paddingTop: 30}} />
            </div>
            <div style={{whitespace: 'nowrap'}}>
              <Heatmap heatmapData={this.props.heatmapData} />
            </div>
          </Paper>
        </Layout>
      </Layout>
    </div>);
  }
}

HomePage.propTypes = {
  requestHeatmap: PropTypes.func.isRequired,
  heatmapData: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    heatmapData: state.heatmap
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestHeatmap: () => dispatch(requestHeatmap()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

