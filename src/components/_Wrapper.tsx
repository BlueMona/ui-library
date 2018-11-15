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
