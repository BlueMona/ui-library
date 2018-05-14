import React from "react";
import { render } from "react-dom";

import { action, observable } from "mobx";
import { observer } from "mobx-react";

import { Checkbox, CustomIcon, Divider, MaterialIcon } from "./peer-ui";

// import propertyArray from "./data/property-array";
// import { genericContact, genericOptions } from "./data/generic-data";

/*
  DONE:
  Checkbox
  Divider
  MaterialIcon
  Tooltip

  IP:
  Avatar (put Dialog in here)
*/

@observer
export class Index extends React.Component {
  // Generic observables
  @observable genericValue = "" as string | boolean;
  @action.bound onChangeValue(val: string | boolean): void {
    this.genericValue = val;
  };

  @observable genericBool = false;
  @action.bound onChangeBool(): void {
    this.genericBool = !this.genericBool;
  };

  render() {
    return(
      <div style={{ textAlign: "center" }}>
        <Checkbox
          checked={this.genericBool}
          onChange={this.onChangeBool}
        />
        <br/>

        <MaterialIcon
          icon="person_add"
          tooltip="add guy"
        />
        <br/>

        <Divider />

        <CustomIcon icon="leave" />

      </div>
      
    );
  }
}

render(<Index />, document.getElementById("app"));
