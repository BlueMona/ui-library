import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { Button } from './Button';

export interface ChipProps {
  className?: string;
}

@observer
export class Chip extends Component<
  ChipProps &
    ({ deletable: true; onDeleteClick: () => void } | { deletable?: false })
> {
  render() {
    return (
      <div
        className={
          this.props.className ? `p-chip ${this.props.className}` : 'p-chip'
        }
      >
        <span className="content">{this.props.children}</span>
        {this.props.deletable ? (
          <Button
            icon="remove"
            onClick={this.props.onDeleteClick}
            theme="small"
          />
        ) : null}
      </div>
    );
  }
}
