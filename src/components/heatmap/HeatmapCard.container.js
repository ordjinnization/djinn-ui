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
  }

  componentWillMount() {
    this.props.requestHeatmap();
    this.props.requestProjects();
  }

  onChangeOfProject(event, key, value) {
    if (value !== allProjectsKey) {
      this.props.requestHeatmapForProject(value);
    } else {
      this.props.requestHeatmap();
    }
    this.setState({selectedProject: value});
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
      allProjectsKey={allProjectsKey} />);
  }
}

HeatmapCardContainer.propTypes = {
  heatmapData: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
  requestHeatmap: PropTypes.func.isRequired,
  requestHeatmapForProject: PropTypes.func.isRequired,
  requestProjects: PropTypes.func.isRequired
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
    requestHeatmapForProject: (project) => dispatch(requestHeatmapForProject(project)),
    requestProjects: () => dispatch(requestProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeatmapCardContainer);
