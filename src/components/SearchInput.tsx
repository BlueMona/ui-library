import React from 'react';
import { Input } from './Input';

export default class SearchInput extends React.Component<Input> {
  render() {
    return <Input {...this.props} isSearch={true} />;
  }
}
