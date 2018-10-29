import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Chip } from '../src/components/Chip';

storiesOf('Chip', module)
  .add('Basic', () => <Chip>Hello, I'm a chip</Chip>)
  .add('Deletable', () => (
    <Chip deletable onDeleteClick={action('delete')}>
      I'm deletable!
    </Chip>
  ));
