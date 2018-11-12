import React from 'react';
import { Input } from './Input';

export default class SearchInput extends React.Component {
  render() {
    return <Input {...this.props} isSearch={true} />;
  }
}
