/**
 * Container component for rendering heatmaps. Handles data transformation.
 */

'use strict';

import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';
import Heatmap from '../heatmap/Heatmap';
import {connect} from 'react-redux';
import {requestHeatmap, requestProjects} from '../../actions/index';
import {transformHeatmapData} from './transform';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Replay from 'material-ui/svg-icons/av/replay';

const STYLE = Object.freeze({
  paddingLeft: 20,
  paddingRight: 20
});

const ALL_PROJECTS_KEY = 'allProjects';

class HeatmapCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedProject: ALL_PROJECTS_KEY};
    this.onChangeOfProject = this.onChangeOfProject.bind(this);
    this.onChangeOfDays = this.onChangeOfDays.bind(this);
  }

  componentWillMount() {
    this.props.requestHeatmap();
    this.props.requestProjects();
  }

  onChangeOfProject(event, key, value) {
    this.setState({selectedProject: value});
  }

  onChangeOfDays(event, value) {
    console.log(value)
  }

  render() {
    return (
      <div style={STYLE}>
        <Paper>
          <div style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 20, height: '800px'}}>
            <div style={{display: 'inline-block', paddingTop: 20}}>
              <span style={{float: 'left'}}>Display data from</span>
              <div style={{float: 'left'}}>
                <DropDownMenu id='dp' value={this.state.selectedProject} onChange={this.onChangeOfProject}
                              style={{marginTop: -20, marginLeft: -10}}>
                  {buildProjectMenuList(this.props.projects)}
                </DropDownMenu>
              </div>
              <span style={{float: 'left', marginTop: -15, marginLeft: -10}}>
                since <TextField maxLength={2}
                                 style={{width: 20}}
                                 hintText={"∞"}
                                 hintStyle={{fontSize: 25}}
                                 onChange={this.onChangeOfDays} /> weeks ago.
          </span>
              <IconButton style={{float: 'left', marginTop: -15}}>
                <Replay />
              </IconButton>
            </div>
            {loadingOrHeatmap(this.props.heatmapData)}
          </div>
        </Paper>
      </div>);
  }
}

/**
 * If heatmap data is empty, return loading progress bar, if heatmap data
 * exists render the heatmap.
 * @param heatmapData the heatmap data
 * @returns {XML}
 */
const loadingOrHeatmap = (heatmapData) => {
  if (Object.keys(heatmapData).length === 0 && heatmapData.constructor === Object) {
    return <LinearProgress mode='indeterminate' />
  } else {
    const data = transformHeatmapData(heatmapData);
    return <Heatmap data={data} />;
  }
};

/**
 * Given a list of projects, build a list of MenuItems.
 * @param projects the list of projects.
 * @return a list of MenuItems.
 */
const buildProjectMenuList = (projects) => {
  const initial = (<MenuItem key={ALL_PROJECTS_KEY} value={ALL_PROJECTS_KEY} primaryText='All Projects' />);
  const projectsItems = projects.map((project) =>
    <MenuItem key={project} value={project} primaryText={project} />
  );
  projectsItems.unshift(initial);
  return projectsItems;
};

const mapStateToProps = (state) => {
  return {
    heatmapData: state.heatmap,
    projects: state.projects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestHeatmap: () => dispatch(requestHeatmap()),
    requestProjects: () => dispatch(requestProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeatmapCard);
