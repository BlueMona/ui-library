/**
 * This class is intended to wrap the entire app (or at least the portion
 * of it that contains the UI) to provide some context or functionality
 * for PeerUI. Wrapping like this allows us to define certain things that
 * need to be global-ish on the client side, but affect PeerUI.
 *
 * Currently all it contains is a listener that adds or removes a
 * `.keyboard-nav` className on the wrapper div, based on user keyboard/mouse
 * input. This in turn applies outlines and other styles to active/focused
 * elements.
 *
 * Eventually there may be things like theming, or portal management, so
 * we've given it a generic name.
 */

import React from 'react';
import { action, computed, observable } from 'mobx';
import _ from 'lodash';

export class PeerUIWrapper extends React.Component {
  @observable
  keyboardNavEnabled = true;

  @computed
  get keyboardNavClass() {
    return this.keyboardNavEnabled ? 'keyboard-nav' : undefined;
  }

  @action.bound
  private handleKeydown = _.throttle((ev: KeyboardEvent) => {
    if (this.keyboardNavEnabled === false && ev.keyCode === 9) {
      this.keyboardNavEnabled = true;
    }
  }, 100);

  @action.bound
  private handleMousemove = _.throttle(() => {
    if (this.keyboardNavEnabled === true) {
      this.keyboardNavEnabled = false;
    }
  }, 100);

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeydown);
    document.addEventListener('mousemove', this.handleMousemove);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
    document.removeEventListener('mousemove', this.handleMousemove);
  }

  render() {
    return <div className={this.keyboardNavClass}>{this.props.children}</div>;
  }
}
