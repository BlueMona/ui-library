import React from 'react';
import { observer } from 'mobx-react';
import css from 'classnames';
import { Input, InputProps } from './Input';
import { MaterialIcon } from './MaterialIcon';

type SearchInputProps = InputProps & { size?: 'small' };

@observer
export class SearchInput extends React.Component<SearchInputProps> {
  render() {
    return (
      <div className="p-search-input-container">
        <MaterialIcon icon="search" className="search-icon" />
        <Input
          {...this.props}
          className={css(
            this.props.className,
            this.props.size,
            'p-search-input'
          )}
          noHelperText={true}
        />
      </div>
    );
  }
}
