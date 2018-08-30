import React from 'react';
import { shallow, mount } from 'enzyme';

import { Input } from './Input';

describe('<Input>', () => {
  it('should default to <input> if multiline is not specified', () => {
    expect(shallow(<Input />).find('input')).toExist();
  })

  it('should be a <textarea> if multiline is specified', () => {
    expect(shallow(<Input multiline />).find('textarea')).toExist();
  })

  it('should accept an innerRef of the correct type and assign it (input)', () => {
    const ref = React.createRef<HTMLInputElement>();
    mount(<Input innerRef={ref} />);
    expect(ref.current).not.toBeNull();
  })

  it('should accept an innerRef of the correct type and assign it (textarea)', () => {
    const ref = React.createRef<HTMLTextAreaElement>();
    mount(<Input multiline innerRef={ref} />);
    expect(ref.current).not.toBeNull();
  })
})