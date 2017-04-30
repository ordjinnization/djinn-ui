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
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import IconButton from 'material-ui/IconButton';

const STYLE = Object.freeze({
  paddingLeft: 20,
  paddingRight: 20,
});

class HeatmapCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isConfigOpen: false};
    this.openEdit = this.openEdit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    this.props.requestHeatmap();
  }

  openEdit() {
    this.setState({isConfigOpen: true});
  }

  handleClose() {
    this.setState({isConfigOpen: false});
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
    return (
      <div style={STYLE}>
        <Paper>
          <div style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 20, height: '800px'}}>
            <HeatmapConfiguration onRequestClose={this.handleClose} open={this.state.isConfigOpen} />
            <IconButton style={{float: 'right'}} onTouchTap={this.openEdit}>
              <ModeEdit />
            </IconButton>
            {contentRender(contentCreator(this.props.heatmapData))}
          </div>
        </Paper>
      </div>);
  }
}

/**
 * Render the card with the given content.
 * @param content
 * @returns {XML}
 */
const contentRender = (content) => {
  return <div style={{whitespace: 'nowrap', marginTop: '45px'}}>
    {content}
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
