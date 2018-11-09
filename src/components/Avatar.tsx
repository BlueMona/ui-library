import React, { Component } from 'react';
import { observer } from 'mobx-react';
import css from 'classnames';

import { ContactProps } from './helpers/interfaces';
import { MaterialIcon } from './MaterialIcon';
import { Tooltip } from './Tooltip';

export interface AvatarProps {
  className?: string;

  /** Contact object */
  contact: ContactProps;

  size?: 'tiny' | 'small' | 'medium' | 'large' | 'full';

  /** Set true to have a tooltip, which will show user"s username */
  tooltip?: boolean;

  /**
   * `clickable` is only for styling (hover effect), which is automatically
   * applied if !!onClick i.e. only need to put `clickable` if you want the
   * hover effect, but Avatar itself has no onClick event
   */
  clickable?: boolean;
  onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void;
}

@observer
export class Avatar extends Component<AvatarProps> {
  render() {
    const c = this.props.contact;

    let errorIcon;
    if (c.isDeleted) {
      errorIcon = <MaterialIcon icon="remove_circle" />;
    } else if (c.tofuError) {
      errorIcon = <MaterialIcon icon="error" />;
    }

    return (
      <div className="p-avatar">
        <div className="contents">
          <div
            className={css(
              'image-container',
              this.props.className,
              `${this.props.size || 'medium'}`,
              {
                clickable: this.props.clickable || !!this.props.onClick,
                'light-bg': !c.hasAvatar && c.color.isLight
              }
            )}
            style={!c.hasAvatar ? { backgroundColor: c.color.value } : {}}
            onClick={this.props.onClick}
          >
            {c.hasAvatar ? (
              <img src={c.mediumAvatarUrl} alt={c.username} draggable={false} />
            ) : (
              c.letter
            )}
          </div>
        </div>
        {errorIcon}
        {this.props.tooltip ? (
          <Tooltip text={c.fullNameAndUsername} position="top" />
        ) : null}
      </div>
    );
  }
}
