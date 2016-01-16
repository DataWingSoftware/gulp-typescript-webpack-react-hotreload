import { expect } from 'chai';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';
import ApplicationContainer from './index';

describe('ApplicationContainer', function () {
  it('works', function () {
    const instance = TestUtils.renderIntoDocument(
      <ApplicationContainer />
    );
    
    expect(instance).to.be.ok;
  });
});