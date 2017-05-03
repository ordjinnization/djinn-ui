/**
 *
 */
'use strict';
import React, {PropTypes} from 'react';
import HeatmapCard from './HeatmapCard.component';
import {connect} from 'react-redux';
import {requestHeatmap, requestHeatmapForProject, requestProjects} from '../../actions/index';

const allProjectsKey = 'allProjects';

class HeatmapCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedProject: allProjectsKey, numberOfDays: 0};
    this.onChangeOfProject = this.onChangeOfProject.bind(this);
    this.onChangeOfDays = this.onChangeOfDays.bind(this);
    this.onReloadConfig = this.onReloadConfig.bind(this);
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

  onReloadConfig() {
    if (this.state.selectedProject !== allProjectsKey) {
      this.props.requestHeatmapForProject(this.state.selectedProject);
    } else {
      this.props.requestHeatmap();
    }
  }

  render() {
    return <HeatmapCard
      heatmapData={this.props.heatmapData}
      projects={this.props.projects}
      selectedProject={this.state.selectedProject}
      onChangeOfProject={this.onChangeOfProject}
      onChangeOfDays={this.onChangeOfDays}
      onReloadConfig={this.onReloadConfig}
      allProjectsKey={allProjectsKey} />
  }
}

const mapStateToProps = (state) => {
  return {
    heatmapData: state.heatmap,
    projects: state.projects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestHeatmap: () => dispatch(requestHeatmap()),
    requestHeatmapForProject: (project) => dispatch(requestHeatmapForProject(project)),
    requestProjects: () => dispatch(requestProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeatmapCardContainer);
