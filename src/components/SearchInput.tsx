import React from 'react';
import { Input } from './Input';

export class SearchInput extends React.Component<Input> {
  render() {
    return <Input {...this.props} isSearch={true} />;
  }
}
