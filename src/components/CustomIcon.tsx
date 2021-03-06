import React, { Component } from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import css from 'classnames';

import { getParentWithClass } from './helpers/dom';
import iconSvgs from './CustomIconSvg';

export interface CustomIconProps {
  className?: string;

  /** The icon"s name, i.e. filename without extension */
  icon: string;

  /** "small" = 16px, or leave blank for default = 24px */
  size?: 'small';

  /**
   * Set true if icon should have hover effects. Requires parent component with
   * class .custom-icon-hover-container
   */
  hover?: boolean;

  selected?: boolean;
  active?: boolean;
}

@observer
export class CustomIcon extends Component<CustomIconProps> {
  /*
   * Hovering: It's Weird
   *
   * Direct SVG recolouring via CSS is tricky and not the most well supported,
   * so we can't just do a :hover state.
   *
   * Instead, with hover enabled, <CustomIcon> actually shows a different SVG
   * on hover. Currently, this is done by adding a listener on a parent
   * element with class .custom-icon-hover-container
   *
   * So, in all, it's kinda clunky, but it does allow us to do things like having
   * CustomIcon change colour when MenuItem is hovered, where MenuItem is
   * way up the parent tree.
   */

  hoverContainer: any; // TODO: is there a better way?
  @action.bound
  setIconRef(ref: HTMLDivElement) {
    if (ref && this.props.hover) {
      this.hoverContainer = getParentWithClass(
        ref,
        'custom-icon-hover-container'
      );

      if (this.hoverContainer) {
        this.hoverContainer.addEventListener(
          'mouseenter',
          this.handleMouseEnter,
          false
        );
        this.hoverContainer.addEventListener(
          'mouseleave',
          this.handleMouseLeave,
          false
        );
      }
    }
  }

  @observable
  hovered = false;
  @action.bound
  handleMouseEnter() {
    this.hovered = true;
  }
  @action.bound
  handleMouseLeave() {
    this.hovered = false;
  }

  componentWillUnmount() {
    if (this.hoverContainer) {
      this.hoverContainer.removeEventListener(
        'mouseenter',
        this.handleMouseEnter,
        false
      );
      this.hoverContainer.removeEventListener(
        'mouseleave',
        this.handleMouseLeave,
        false
      );
    }
  }

  render() {
    return (
      <div
        className={css('p-custom-icon', this.props.size, this.props.className, {
          selected: this.props.selected,
          hovered: this.hovered,
          active: this.props.active
        })}
        ref={this.setIconRef}
      >
        {iconSvgs[this.props.icon].default}
        {iconSvgs[this.props.icon].hover || null}
      </div>
    );
  }
}
