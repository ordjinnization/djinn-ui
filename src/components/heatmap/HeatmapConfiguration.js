/**
 *
 */

'use strict';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import IconButton from 'material-ui/IconButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


const HeatmapConfiguration = ({open, onRequestClose}) => {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={onRequestClose}
      />,
      <FlatButton
        label="Update"
        primary={true}
        onTouchTap={onRequestClose}
      />,
    ];
    return (<div>
      <Dialog title="Heatmap Configuration"
              actions={actions}
              modal={false}
              open={open}
              onRequestClose={onRequestClose}>
        <div style={{display: 'inline-block', paddingTop: 20}}>
          <span style={{float: 'left'}}>Display data from</span>
          <div style={{float: 'left'}}>
            <DropDownMenu id='dp' value={1} onChange={null}
                          style={{marginTop: -20, marginLeft: -10}} listStyle={{color: 'red'}}>
              <MenuItem value={1} primaryText="All Projects" />
              <MenuItem primaryText="GSTC" />
              <MenuItem primaryText="VNX" />
            </DropDownMenu>
          </div>
          <span style={{float: 'left', marginTop: -15, marginLeft: -10}}>
            since <TextField maxLength={2}
                       style={{width: 20}}
                       hintText={"∞"}
                       hintStyle={{fontSize: 25}} /> weeks ago.
          </span>
        </div>
      </Dialog>

    </div>);

};

HeatmapConfiguration.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default HeatmapConfiguration;
