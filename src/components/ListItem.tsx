import React, { Component } from 'react';
import css from 'classnames';

import { MaterialIcon } from './MaterialIcon';
import { getDataProps } from './helpers/dom';

export interface ListItemProps {
  className?: string;
  disabled?: boolean;
  caption?: any;
  legend?: any;
  leftContent?: any;
  leftIcon?: string;
  rightContent?: any;
  rightIcon?: string;
  onClick?: (ev?: React.MouseEvent<HTMLLIElement>) => void;
}

export class ListItem extends Component<ListItemProps> {
  render() {
    return (
      <li
        className={css('p-list-item', this.props.className, {
          disabled: this.props.disabled
        })}
        onClick={this.props.onClick}
        {...getDataProps(this.props)}
      >
        {this.props.leftIcon ? (
          <div className="side-content left icon">
            <MaterialIcon icon={this.props.leftIcon} />
          </div>
        ) : null}
        {this.props.leftContent ? (
          <div className="side-content left">{this.props.leftContent}</div>
        ) : null}

        <div className="content">
          {this.props.caption || this.props.legend ? (
            <React.Fragment>
              {this.props.caption ? (
                <div className="caption">{this.props.caption}</div>
              ) : null}
              {this.props.legend ? (
                <div className="legend">{this.props.legend}</div>
              ) : null}
            </React.Fragment>
          ) : (
            this.props.children
          )}
        </div>

        {this.props.rightIcon ? (
          <div className="side-content right icon">
            <MaterialIcon icon={this.props.rightIcon} />
          </div>
        ) : null}
        {this.props.rightContent ? (
          <div className="side-content right">{this.props.rightContent}</div>
        ) : null}
      </li>
    );
  }
}
