import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';

addDecorator(
  withInfo({
    inline: true
  })
);

addDecorator(
  withOptions({
    name: 'Peer-UI',
    url: 'https://github.com/PeerioTechnologies/ui-library',
    addonPanelInRight: true,
    sortStoriesByKind: true
  })
);

// import '../src/style.scss';

const req = require.context('../stories', true, /\.tsx?$/);

function loadStories() {
  require('../src/style.scss');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
