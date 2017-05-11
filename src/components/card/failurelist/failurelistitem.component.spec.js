/**
 *
 */
'use strict';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';
import React from 'react';
import FailureListItem from './failurelistitem.component';

const init = (props) => {
  return shallow(<FailureListItem {...props} />);
};

describe('failtable list item component', () => {

  it('should render with the given data', () => {
    // Arrange
    const appName = 'test-app';
    const description = <div>desc</div>;
    const leftIcon = <div>icon</div>;

    // Act
    const wrapper = init({appName, description, leftIcon});

    // Assert
    const props = wrapper.props();
    expect(props.primaryText).to.equal(appName);
    expect(props.secondaryText).to.deep.equal(description);
    expect(props.leftAvatar).to.equal(leftIcon);
  });
});
