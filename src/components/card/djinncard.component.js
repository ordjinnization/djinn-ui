/**
 *
 */
'use strict';
import Paper from 'material-ui/Paper';
import React from 'react';

const paperParentStyle = {
  paddingLeft: 20,
  paddingRight: 20
};

const paperStyle = {
  paddingLeft: 20,
  paddingRight: 20,
  paddingBottom: 20,
  height: '800px',
  width:'100%',
  position:'relative'
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
