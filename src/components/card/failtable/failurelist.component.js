/**
 *
 */
'use strict';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import NavigationSubdirectoryArrowRight from 'material-ui/svg-icons/navigation/subdirectory-arrow-right';
import React from 'react';
import DjinnCard from '../djinncard.component';

const FailTable = () => {
  return (<DjinnCard>
    <List>
      <Subheader>Recent Failures</Subheader>
      <ListItem
        primaryText='titan-user-management'
        secondaryText={<div>Failure in stage <span
          style={{fontStyle: 'italic', color: '#00838f'}}>deploy to staging</span>.</div>}
        leftAvatar={<div><i style={{color: 'red'}} className='material-icons md-36'>error</i></div>}
        rightIcon={<NavigationSubdirectoryArrowRight />}
      />
      <ListItem
        primaryText='some-other-app'
        secondaryText={<div>Failure in stage <span style={{fontStyle: 'italic', color: '#00838f'}}>compile</span>.
        </div>}
        leftAvatar={<div><i style={{color: 'red'}} className='material-icons md-36'>error</i></div>}
        rightIcon={<NavigationSubdirectoryArrowRight />}
      />
    </List>

  </DjinnCard>);
};

export default FailTable;
