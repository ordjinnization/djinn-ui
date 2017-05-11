/**
 *
 */
'use strict';

import {ListItem} from 'material-ui/List';
import NavigationSubdirectoryArrowRight from 'material-ui/svg-icons/navigation/subdirectory-arrow-right';
import React, {PropTypes} from 'react';

const FailureListItem = (props) => {
  console.log(props);
  return (<ListItem
    primaryText={props.appName}
    secondaryText={props.description}
    leftAvatar={props.leftIcon}
    rightIcon={<NavigationSubdirectoryArrowRight />}

  />);
};

FailureListItem.PropTypes = {
  appName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  leftIcon: PropTypes.func.isRequired
};

export default FailureListItem;
