import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Avatar } from '../src/components/Avatar';

const mockContact = {
  color: {
    value: '#faa',
    isLight: true
  },
  fullNameAndUsername: 'Bob Friendly',
  letter: 'B',
  username: 'bob_friendly',
  mediumAvatarUrl: null
};

storiesOf('Avatar', module).add('Basic', () => (
  <Avatar contact={mockContact} onClick={action('clicked')} />
));
