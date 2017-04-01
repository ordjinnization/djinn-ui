/**
 *
 */
'use strict';

import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import AppBar from 'material-ui/AppBar';


const styles = {
  appBar: {
    flexWrap: 'wrap',
  },
  tabs: {
    width: '100%',
  }
};

/**
 * Build a title and subtitle.
 * @returns {XML}
 */
let createTitles = () => {
  return <div>
    <div style={{paddingTop: 10}}>jstats</div>
    <div style={{fontSize: 'small'}}>Jenkins Build Statistics</div>
  </div>
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
    console.log("open")
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <AppBar showMenuIconButton={false}
                style={styles.appBar}
                titleStyle={{lineHeight: 'normal'}}
                onLeftIconButtonTouchTap={this.handleToggle}
                title={createTitles()} />
        <br />
      </div>
    );
  }
}

export default Header;
