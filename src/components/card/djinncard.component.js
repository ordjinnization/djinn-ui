/**
 *
 */
'use strict';
import React from 'react';
import Paper from 'material-ui/Paper';

const paperParentStyle = {
  paddingLeft: 20,
  paddingRight: 20
};

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

const DjinnCard = ({children}) => {
  return (<div style={paperParentStyle}>
    <Paper style={paperStyle}>
      <div style={paperParentStyle}>
        {children}
      </div>
    </Paper>
  </div>);
};

export default DjinnCard;
