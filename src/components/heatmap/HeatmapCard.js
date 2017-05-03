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

const paperParentStyle = Object.freeze({
  paddingLeft: 20,
  paddingRight: 20
});

const paperStyle = {
  paddingLeft: 20,
  paddingRight: 20,
  paddingBottom: 20,
  height: '800px'
};

const paperChildStyle = {
  display: 'inline-block',
  paddingTop: 20
};


const allProjectsKey = 'allProjects';

class HeatmapCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedProject: allProjectsKey, numberOfDays: 0};
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
    this.setState({numberOfDays: value});
  }

  render() {
    return (
      <div style={paperParentStyle}>
        <Paper style={paperStyle}>
          <div style={paperChildStyle}>
            <span style={{float: 'left'}}>Display data from</span>
            <div style={{float: 'left'}}>
              {projectsDropDown(this.props.projects, this.state.selectedProject, this.onChangeOfProject)}
            </div>
            <span style={{float: 'left', marginTop: -15, marginLeft: -10}}>
                since {daysTextField(this.onChangeOfDays)} weeks ago.
             </span>
            <IconButton style={{float: 'left', marginTop: -15}}>
              <Replay />
            </IconButton>
          </div>
          {loadingOrHeatmap(this.props.heatmapData)}
        </Paper>
      </div>);
  }
}

/**
 * Render the projects dropdown.
 * @param projects the projects to render in the dropdown.
 * @param selectedProject
 * @param onChangeOfProject function to run when a project gets selected.
 * @returns {XML}
 */
const projectsDropDown = (projects, selectedProject, onChangeOfProject) => {
  return <DropDownMenu id='projects-selector' value={selectedProject} onChange={onChangeOfProject}
                       style={{marginTop: -20, marginLeft: -10}}>
    {buildProjectMenuList(projects)}
  </DropDownMenu>
};

/**
 * Render a text field for entering days from 0 to 99.
 * @param onChangeOfDays a function to run when days are entered.
 * @returns {XML}
 */
const daysTextField = (onChangeOfDays) => {
  return <TextField maxLength={2}
                    style={{width: 20}}
                    hintText={"∞"}
                    hintStyle={{fontSize: 25}}
                    onChange={onChangeOfDays} />
};

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
  const initial = (<MenuItem key={allProjectsKey} value={allProjectsKey} primaryText='All Projects' />);
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
