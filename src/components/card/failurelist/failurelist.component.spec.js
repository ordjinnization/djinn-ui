/**
 *
 */
'use strict';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import FailureList from './failurelist.component';
import FailureListItem from './failurelistitem.component';

const init = (props) => {
  return mount(<FailureList {...props} />, {
    context: {muiTheme: getMuiTheme()},
    childContextTypes: {
      muiTheme: React.PropTypes.object
    }
  });
};

describe('failure list component', () => {

  it('should render each failure item', () => {
    // Arrange
    const props = {
      failures: [
        {
          appName: 'test-app1',
          description: 'test'
        }, {
          appName: 'test-app2',
          description: 'test2'
        }
      ]
    };

    // Act
    const wrapper = init(props);

    // Assert
    const items = wrapper.find(FailureListItem);
    expect(items).to.have.length(2);
    expect(items.at(0).props().appName).to.equal('test-app1');
    expect(items.at(0).props().description).to.equal('test');
    expect(items.at(1).props().appName).to.equal('test-app2');
    expect(items.at(1).props().description).to.equal('test2');
  });
});
