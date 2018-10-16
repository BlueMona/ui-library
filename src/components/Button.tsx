import React from 'react';
import css from 'classnames';

import { MaterialIcon } from './MaterialIcon';
import { CustomIcon } from './CustomIcon';
import { Tooltip } from './Tooltip';

export interface ButtonProps {
  className?: string;
  style?: object;

  /** Button will render as an <a> element */
  href?: string;

  /** If label content exists, child content ignored. Can put arbitrary HTML in here. */
  label?: React.ReactChild;

  /** To use MaterialIcon */
  icon?: string;

  /** To use CustomIcon */
  customIcon?: string;

  /** Makes button unclickable and applies "disabled" styling */
  disabled?: boolean;

  /** Makes button blue or other "selected" colour */
  selected?: boolean;

  /** Makes button teal or other "active" colour */
  active?: boolean;

  /** HTML tab index */
  tabIndex?: number;

  onClick?: (ev?: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (
    ev?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  onMouseLeave?: (
    ev?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;

  /** Tooltip text */
  tooltip?: string;

  /** Where tooltip will be rendered. Defaults to "top" */
  tooltipPosition?: 'top' | 'right' | 'bottom' | 'left';

  /** Blank for default = 24px, "small" = 16px */
  tooltipSize?: 'small';

  // TODO: clean up these themes (on desktop too)
  /** Various themes for styling.
   *
   * * (default): font colour $color-affirmative, background transparent
   * * primary: font color $text-dark-default
   * * secondary: font color $text-dark-inactive (for secondary action e.g. dialog "cancel")
   * * inverted: font color $text-light-default
   * * affirmative: font color $white, background $color-affirmative
   * * small: collapses padding
   * * link: style button as link (look like <a>)
   * * no-hover: remove hover effects
   */
  theme?: string;
}

/** Button class. hey. */
export class Button extends React.Component<ButtonProps> {
  render() {
    const classNames = css('p-button', this.props.className, this.props.theme, {
      icon: !this.props.label && (!!this.props.icon || !!this.props.customIcon),
      'icon-and-label':
        !!this.props.label && (!!this.props.icon || !!this.props.customIcon),
      selected: this.props.selected,
      active: this.props.active
    });

    const buttonContent = [
      this.props.icon && (
        <MaterialIcon
          key={`button-material-icon-${this.props.icon}`}
          icon={this.props.icon}
        />
      ),
      this.props.customIcon && (
        <CustomIcon
          key={`button-custom-icon-${this.props.customIcon}`}
          icon={this.props.customIcon}
        />
      ),
      this.props.label || this.props.children ? (
        <span
          key={`button-label-${this.props.label || this.props.children}`}
          className="label"
        >
          {this.props.label || this.props.children}
        </span>
      ) : null,
      this.props.tooltip ? (
        <Tooltip
          key={`button-tooltip-${this.props.tooltip}`}
          text={this.props.tooltip}
          position={this.props.tooltipPosition || 'top'}
          size={this.props.tooltipSize}
        />
      ) : null
    ];

    if (this.props.href) {
      return (
        <a
          tabIndex={this.props.tabIndex}
          href={this.props.href}
          className={classNames}
          onMouseEnter={this.props.onMouseEnter}
          onMouseLeave={this.props.onMouseLeave}
          style={this.props.style}
        >
          {buttonContent}
        </a>
      );
    }

    return (
      <button
        tabIndex={this.props.tabIndex}
        className={classNames}
        onClick={this.props.onClick}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        disabled={this.props.disabled}
        style={this.props.style}
      >
        {buttonContent}
      </button>
    );
  }
}
