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

import 'material-design-icons/iconfont/material-icons.css';
import './SourceSerifPro/sourceserifpro.css';
import './OpenSans/opensans.css';

const req = require.context('../stories', true, /\.tsx?$/);

function loadStories() {
  require('./main.scss');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
