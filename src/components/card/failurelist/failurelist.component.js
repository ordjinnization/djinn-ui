/**
 *
 */
'use strict';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import React from 'react';
import FailureListItem from './failurelistitem.component';

const FailureList = ({failures}) => {
  const leftIcon = (<div>
    <i style={{color: 'red'}} className='material-icons md-36'>error</i>
  </div>);

  return (<List>
    <Subheader>Recent Failures</Subheader>
    {failures.map((item) => {
      return <FailureListItem key={item.appName} {...item} leftIcon={leftIcon} />
    })}
  </List>);
};

export default FailureList;
