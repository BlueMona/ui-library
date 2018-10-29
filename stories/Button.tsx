import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../src/components/Button';

storiesOf('Button', module).add('Basic', () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
));
