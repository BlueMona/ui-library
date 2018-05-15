import React from "react";
import { render } from "react-dom";

import { action, observable } from "mobx";
import { observer } from "mobx-react";

import { Button, Checkbox, Chip, CustomIcon, Dialog, Divider, MaterialIcon } from "./peer-ui";

// import propertyArray from "./data/property-array";
// import { genericContact, genericOptions } from "./data/generic-data";

/*
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
    const actions = [
      {
        label: "Cancel",
        onClick: () => {console.log("Cancel")}
      },
      {
        label: "OK",
        onClick: () => {this.onChangeBool()}
      }
    ];

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

        <Button
          theme="affirmative inverted"
          onClick={this.onChangeBool}
        >
          Button
        </Button>

        <Chip deletable>Content</Chip>

        <Dialog
          active={this.genericBool}
          actions={actions}
          onCancel={this.onChangeBool}
        >
          Child content
        </Dialog>
      </div>
      
    );
  }
}

render(<Index />, document.getElementById("app"));
