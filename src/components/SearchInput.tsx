/*
  Functionally almost identical to the Input component.
  Slightly different style, adds the "search" icon, and no helper/error text. 
*/

import React from 'react';
import { observer } from 'mobx-react';
import css from 'classnames';
import { Input, InputProps } from './Input';
import { MaterialIcon } from './MaterialIcon';

type SearchInputProps = InputProps & { size?: 'large' };

@observer
export class SearchInput extends React.Component<SearchInputProps> {
  render() {
    return (
      <div className={css('p-search-input-container', this.props.size)}>
        <MaterialIcon icon="search" className="search-icon" />
        <Input
          {...this.props}
          className={css(this.props.className, 'p-search-input')}
          noHelperText={true}
        />
      </div>
    );
  }
}
