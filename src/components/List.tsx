import React from 'react';
import css from 'classnames';

export interface ListProps {
  className?: string;
  clickable?: boolean;
  theme?: 'large' | 'no-hover';
}

export class List extends React.Component<ListProps> {
  render() {
    return (
      <ul
        className={css('p-list', this.props.className, this.props.theme, {
          clickable: this.props.clickable
        })}
      >
        {this.props.children}
      </ul>
    );
  }
}
