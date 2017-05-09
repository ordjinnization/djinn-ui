/**
 * Container component for rendering heatmaps. Handles data transformation.
 */

'use strict';

import DropDownMenu from 'material-ui/DropDownMenu';
import LinearProgress from 'material-ui/LinearProgress';
import MenuItem from 'material-ui/MenuItem';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Heatmap from '../../heatmap/heatmap';
import {transformHeatmapData} from './transform';
import DjinnCard from '../djinncard.component';

const contentStyle = {
  display: 'inline-block',
  paddingTop: 20
};

const HeatmapCard = (props) => {
  return (<DjinnCard>{render(props)}</DjinnCard>);
};

/**
 * Render our content, handling errors and loading.
 * @param props
 * @returns {XML}
 */
const render = (props) => {
  if (props.heatmapErrors.length > 0 || props.projectsErrors.length > 0) {
    return renderErrors(props.heatmapErrors, props.projectsErrors);
  } else {
    return renderContent(props);
  }
};

/**
 * Render - just as a plain list - any errors.
 * @param heatmapErrors
 * @param projectErrors
 * @returns {XML}
 */
const renderErrors = (heatmapErrors, projectErrors) => {
  return (<div style={contentStyle}>
    <ul>
      {heatmapErrors.map(error => <li key={error}>{error}</li>)}
    </ul>
    <ul>
      {projectErrors.map(error => <li key={error}>{error}</li>)}
    </ul>
  </div>);
};

/**
 * Render our actual content.
 * @param props
 * @returns {XML}
 */
const renderContent = (props) => {
  return (<div>
    <div style={contentStyle}>
      <span style={{float: 'left'}}>Display data from</span>
      <div style={{float: 'left'}}>
        {projectsDropDown("projects-selector", props.projects,
          props.selectedProject, props.onChangeOfProject, props.allProjectsKey)}
      </div>
      <span style={{float: 'left', marginTop: -15, marginLeft: -10}}>
              since {daysTextField(props.onChangeOfDays)} weeks ago.
           </span>
    </div>
    {loadingOrHeatmap(props.heatmapData)}
  </div>);
};


/**
 * Render the projects dropdown.
 * @param id
 * @param projects the projects to render in the dropdown.
 * @param selectedProject
 * @param onChangeOfProject function to run when a project gets selected.
 * @param allProjectsKey
 * @returns {XML}
 */
const projectsDropDown = (id, projects, selectedProject, onChangeOfProject, allProjectsKey) => {
  return (<DropDownMenu id value={selectedProject} onChange={onChangeOfProject}
                        style={{marginTop: -20, marginLeft: -10}}>
    {buildProjectMenuList(projects, allProjectsKey)}
  </DropDownMenu>);
};

/**
 * Given a list of projects, build a list of MenuItems.
 * @param projects the list of projects.
 * @param allProjectsKey
 * @return a list of MenuItems.
 */
const buildProjectMenuList = (projects, allProjectsKey) => {
  let menuList = projects.map((project) =>
    <MenuItem key={project.replace(/\s/g, '')} value={project} primaryText={project} />
  );
  menuList.unshift(<MenuItem key={allProjectsKey} value={allProjectsKey} primaryText='All Projects' />);
  return menuList;
};

/**
 * Render a text field for entering days from 0 to 99.
 * @param onChangeOfDays a function to run when days are entered.
 * @returns {XML}
 */
const daysTextField = (onChangeOfDays) => {
  return (<TextField maxLength={2}
                     style={{width: 20}}
                     hintText={"∞"}
                     hintStyle={{fontSize: 25}}
                     onChange={onChangeOfDays}
                     disabled />);
};

/**
 * If heatmap data is empty, return loading progress bar, if heatmap data
 * exists render the heatmap.
 * @param heatmapData the heatmap data
 * @returns {XML}
 */
const loadingOrHeatmap = (heatmapData) => {
  if (Object.keys(heatmapData).length === 0 && heatmapData.constructor === Object) {
    return <LinearProgress mode='indeterminate' />;
  } else {
    const data = transformHeatmapData(heatmapData);
    return <Heatmap data={data} />;
  }
};

HeatmapCard.propTypes = {
  heatmapData: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
  selectedProject: PropTypes.string.isRequired,
  onChangeOfProject: PropTypes.func.isRequired,
  onChangeOfDays: PropTypes.func.isRequired,
  allProjectsKey: PropTypes.string.isRequired
};

export default HeatmapCard;
