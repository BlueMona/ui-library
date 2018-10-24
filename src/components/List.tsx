import React, { Component } from 'react';
import css from 'classnames';

export interface ListProps {
  className?: string;
  clickable?: boolean;
  // hacky but the easiest way to avoid breaking changes
  theme?: 'large' | 'no-hover' | 'large no-hover' | 'no-hover large';
}

export class List extends Component<ListProps> {
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
