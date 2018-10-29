import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Checkbox } from '../src/components/Checkbox';

storiesOf('Checkbox', module).add('Basic', () => (
  <Checkbox
    checked={true}
    onChange={action('click')}
    label={'Hello Checkbox'}
  />
));
