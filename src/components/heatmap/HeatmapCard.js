/**
 * Container component for rendering heatmaps. Handles data transformation.
 */

'use strict';

import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';
import Heatmap from '../heatmap/Heatmap';
import {connect} from 'react-redux';
import {requestHeatmap} from '../../actions/index';
import transform from './transform';
import HeatmapConfiguration from './HeatmapConfiguration';


const STYLE = Object.freeze({
  paddingLeft: 20,
  paddingRight: 20,
});

class HeatmapCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestHeatmap();
  }

  render() {
    const contentCreator = (heatmapData) => {
      if (Object.keys(heatmapData).length === 0 && heatmapData.constructor === Object) {
        return <LinearProgress mode='indeterminate' />
      } else {
        const data = transform(heatmapData);
        return <Heatmap data={data} />;
      }
    };
    return cardRender(contentCreator(this.props.heatmapData));
  }
}

/**
 * Render the card with the given content.
 * @param content
 * @returns {XML}
 */
const cardRender = (content) => {
  return <div style={STYLE}>
    <Paper >
      <div style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 20, height: '800px'}}>
        <HeatmapConfiguration/>
        <div style={{whitespace: 'nowrap', marginTop: '45px'}}>
          {content}
        </div>
      </div>
    </Paper>
  </div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(HeatmapCard);
