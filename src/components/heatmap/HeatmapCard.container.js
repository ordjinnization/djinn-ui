/**
 *
 */
'use strict';
import React, {PropTypes} from 'react';
import HeatmapCard from './HeatmapCard.component';
import {connect} from 'react-redux';
import {requestHeatmap, requestProjects} from '../../actions/index';

const allProjectsKey = 'All';

class HeatmapCardContainer extends React.Component {
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
    return <HeatmapCard
      heatmapData={this.props.heatmapData}
      projects={this.props.projects}
      selectedProject={this.state.selectedProject}
      onChangeOfProject={this.onChangeOfProject}
      onChangeOfDays={this.onChangeOfDays} />
  }
}

const mapStateToProps = (state) => {
  if(state.projects.length) {
    state.projects.unshift(allProjectsKey)
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(HeatmapCardContainer);
