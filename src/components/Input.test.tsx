import React from 'react';
import { shallow } from 'enzyme';

import { Input } from './Input';

describe('<Input>', () => {
  it('should default to <input> if multiline is not specified', () => {
    expect(shallow(<Input />).find('input')).toExist();
  })

  it('should be a <textarea> if multiline is specified', () => {
    expect(shallow(<Input multiline />).find('textarea')).toExist();
  })
})