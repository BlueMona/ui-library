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

export class A11yHelper {
  @observable
  keyboardNav = true;

  @computed
  get keyboardNavClass() {
    return this.keyboardNav ? '.keyboard-nav' : null;
  }

  @action.bound
  private handleKeydown(ev: KeyboardEvent) {
    //eslint-disable-next-line no-console
    console.log('handleKeydown');
    if (this.keyboardNav === false && ev.keyCode === 9) {
      this.keyboardNav = true;
    }
  }

  @action.bound
  private handleMousemove() {
    //eslint-disable-next-line no-console
    console.log('handleMousemove');
    this.keyboardNav = false;
  }

  addListeners = () => {
    document.addEventListener('keydown', this.handleKeydown);
    document.addEventListener('mousemove', this.handleMousemove);
  };

  removeListeners = () => {
    document.addEventListener('keydown', this.handleKeydown);
    document.addEventListener('mousemove', this.handleMousemove);
  };
}
