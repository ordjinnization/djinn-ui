/**
 *
 */
'use strict';

import {List, ListItem} from 'material-ui/List';
import NavigationSubdirectoryArrowRight from 'material-ui/svg-icons/navigation/subdirectory-arrow-right';
import React, {PropTypes} from 'react';

const FailureListItem = (props) => {
  return (<ListItem
    primaryText={props.appName}
    secondaryText={props.description}
    leftAvatar={props.leftIcon}
    rightIcon={<NavigationSubdirectoryArrowRight />}
    onTouchTap={props.onClickHandler}
    key={props.appName}
  />);
};

FailureListItem.PropTypes = {
  appName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  leftIcon: PropTypes.func.isRequired,
  onClickHandler: PropTypes.func
};

export default FailureListItem;
