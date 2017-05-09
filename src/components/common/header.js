/**
 *
 */
'use strict';

import AppBar from 'material-ui/AppBar';
import React, {PropTypes} from 'react';
import {IndexLink, Link} from 'react-router';

const STYLES = Object.freeze({
  appBar: {
    flexWrap: 'wrap',
  },
  tabs: {
    width: '100%',
  }
});

/**
 * Build a title and subtitle.
 * @returns {XML}
 */
let createTitles = () => {
  return (<div>
    <div style={{paddingTop: 10}}>Djinn</div>
    <div style={{fontSize: 'small'}}>Jenkins Build Statistics</div>
  </div>);
};

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <AppBar showMenuIconButton={false}
                style={STYLES.appBar}
                titleStyle={{lineHeight: 'normal'}}
                onLeftIconButtonTouchTap={this.handleToggle}
                title={createTitles()} />
        <br />
      </div>
    );
  }
}

export default Header;
