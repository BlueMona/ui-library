import React from 'react';
import { shallow, mount } from 'enzyme';

import { Dialog } from '../Dialog';

// FIXME: disabled! untestable: uninjectably grabs a dom node with getElementById on require
xdescribe('<Dialog>', () => {
  it('should match the snapshot', () => {
    expect(
      shallow(
        <Dialog active title="Hello dialog!">
          <div>This is the content of the dialog.</div>
        </Dialog>
      )
    ).toMatchSnapshot();
  });

  it('should be visible when active is true, and not visible when active is false', async () => {
    const Renderer = (active: boolean) => (
      <Dialog active={active} title="Hello dialog!">
        <div>This is the content of the dialog.</div>
      </Dialog>
    );

    // @ts-ignore
    let component = mount(<Renderer active />);

    expect(component).toExist();

    // TODO: model disabled prop
  });

  // TODO: test getting by ref
});
