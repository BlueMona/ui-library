/**
 * This class is intended to wrap the entire app (or at least the portion
 * of it that contains the UI) to provide some control for global-ish state
 * that affects accessibility of PeerUI components.
 *
 * Currently all it contains is listeners that add or remove a
 * `.keyboard-nav` className on the wrapper div, based on user keyboard/mouse
 * input. This in turn applies outlines and other styles to active/focused
 * elements.
 */

import React from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import css from 'classnames';

@observer
export class A11yWrapper extends React.Component {
  @observable
  keyboardNavEnabled = true;

  @action.bound
  private handleKeydown(ev: KeyboardEvent) {
    if (this.keyboardNavEnabled === false && ev.keyCode === 9) {
      this.keyboardNavEnabled = true;
    }
  }

  @action.bound
  private handleMousemove() {
    if (this.keyboardNavEnabled === true) {
      this.keyboardNavEnabled = false;
    }
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeydown);
    document.addEventListener('mousemove', this.handleMousemove);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
    document.removeEventListener('mousemove', this.handleMousemove);
  }

  render() {
    return (
      <div
        className={css('peerui-wrapper', {
          'keyboard-nav': this.keyboardNavEnabled
        })}
      >
        {this.props.children}
      </div>
    );
  }
}
