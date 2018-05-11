import React from 'react';
import { render } from 'react-dom';

import { action, observable } from 'mobx';
import { observer } from 'mobx-react';

import { Checkbox } from './peer-ui';

// import propertyArray from './data/property-array';
// import { genericContact, genericOptions } from './data/generic-data';

@observer
export class Index extends React.Component {
  // Generic observables
  @observable genericString = '';
  @action.bound onChangeString(val: string) {
    this.genericString = val;
  };

  @observable genericBool = false;
  @action.bound onChangeBool() {
    this.genericBool = !this.genericBool;
  };

  render() {
    return(
      <div>
        <Checkbox
          checked={this.genericBool}
          onChange={this.onChangeBool}
        />
      </div>
    );
  }
}

render(<Index />, document.getElementById('app'));
