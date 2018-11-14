/**
 * This class works as a combined store and helper for a11y functionality.
 * Certain components in PeerUI have a11y-specific styling,
 *  e.g. Button has unique :focus styles when inside the .keyboard-nav class
 *
 * Rather than directly manipulating the classNames on <body> or #root, this
 * helper lets the component create/store a11y state (e.g. keyboardNav) and
 * then access/modify that state directly or use the included functions.
 *
 * The idea is that it can be instantiated with `new` whever it's needed and
 * then the listeners likewise can be added/removed according to the component's
 * needs. (I imagine this will usually be tied to the component lifecycle.)
 */

import { action, computed, observable } from 'mobx';
import _ from 'lodash';

export class A11yHelper {
  @observable
  keyboardNavEnabled = true;

  @computed
  get keyboardNavClass() {
    return this.keyboardNavEnabled ? 'keyboard-nav' : null;
  }

  @action.bound
  private handleKeydown(ev: KeyboardEvent) {
    _.throttle(() => {
      if (this.keyboardNavEnabled === false && ev.keyCode === 9) {
        this.keyboardNavEnabled = true;
      }
    }, 100);
  }

  @action.bound
  private handleMousemove() {
    _.throttle(() => {
      this.keyboardNavEnabled = false;
    }, 100);
  }

  keynavListeners = {
    add: () => {
      document.addEventListener('keydown', this.handleKeydown);
      document.addEventListener('mousemove', this.handleMousemove);
    },
    remove: () => {
      document.addEventListener('keydown', this.handleKeydown);
      document.addEventListener('mousemove', this.handleMousemove);
    }
  };
}
