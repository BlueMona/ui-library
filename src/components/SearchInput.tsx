/*
  Functionally almost identical to the Input component.
  Slightly different style, adds the "search" icon, and no helper/error text. 
*/

import React from 'react';
import { observer } from 'mobx-react';
import css from 'classnames';
import { Input, InputProps } from './Input';
import { MaterialIcon } from './MaterialIcon';

@observer
export class SearchInput extends React.Component<InputProps> {
  render() {
    return (
      <div className={css('p-search-input', this.props.className)}>
        <MaterialIcon icon="search" className="search-icon" />
        <Input
          {...this.props}
          size={this.props.size || 'small'}
          noHelperText={true}
        />
      </div>
    );
  }
}
