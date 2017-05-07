/**
 *
 */
'use strict';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {requestHeatmap, requestHeatmapForProject, requestProjects} from './actions';
import HeatmapCard from './HeatmapCard.component';

const allProjectsKey = 'allProjects';

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
    if (value !== allProjectsKey) {
      this.props.requestHeatmapForProject(value);
    } else {
      this.props.requestHeatmap();
    }
  }

  onChangeOfDays(event, value) {
    this.setState({numberOfDays: value});
  }

  render() {
    return (<HeatmapCard
      heatmapData={this.props.heatmapData}
      projects={this.props.projects}
      selectedProject={this.state.selectedProject}
      onChangeOfProject={this.onChangeOfProject}
      onChangeOfDays={this.onChangeOfDays}
      allProjectsKey={allProjectsKey}
      projectsErrors={this.props.projectsErrors}
      heatmapErrors={this.props.heatmapErrors} />);
  }
}

HeatmapCardContainer.propTypes = {
  heatmapData: PropTypes.object,
  projects: PropTypes.array,
  requestHeatmap: PropTypes.func,
  requestHeatmapForProject: PropTypes.func,
  requestProjects: PropTypes.func,
  projectsErrors: PropTypes.array,
  heatmapErrors: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    heatmapData: state.heatmap,
    projects: state.projects,
    projectsErrors: state.projectsErrors,
    heatmapErrors: state.heatmapErrors
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
