import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ProgressBar } from '../src/components/ProgressBar';

storiesOf('ProgressBar', module)
  .add('Circular', () => <ProgressBar circular />)
  .add('Linear Indeterminate', () => <ProgressBar />)
  .add('Linear Determinate', () => <ProgressBar value={60} max={100} />);
