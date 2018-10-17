import React, { Component } from 'react';
import css from 'classnames';
import { Tooltip } from './Tooltip';

// TODO: size prop?
export interface MaterialIconProps {
  active?: boolean;
  className?: string;
  icon: string;
  onClick?: (ev?: React.MouseEvent<HTMLSpanElement>) => void;
  tooltip?: string;
  tooltipPosition?: 'top' | 'right' | 'bottom' | 'left';
}

export class MaterialIcon extends Component<MaterialIconProps> {
  render() {
    return (
      <span
        className={css('material-icons', this.props.className, {
          active: this.props.active
        })}
        onClick={this.props.onClick}
      >
        {this.props.icon}
        {this.props.tooltip ? (
          <Tooltip
            text={this.props.tooltip}
            position={this.props.tooltipPosition}
          />
        ) : null}
      </span>
    );
  }
}
