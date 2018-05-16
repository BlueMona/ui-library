import React from "react";
import { render } from "react-dom";

import { action, observable } from "mobx";
import { observer } from "mobx-react";

import {
  Avatar,
  Button,
  // Checkbox,
  // Chip,
  CustomIcon,
  // Dialog,
  // Divider,
  Dropdown,
  // Input,
  // List, ListHeading, ListItem,
  // MaterialIcon,
  // Menu, MenuItem,
  ProgressBar,
  RadioButtons,
  Switch
} from "./peer-ui";

// import propertyArray from "./data/property-array";
// import { genericContact, genericOptions } from "./data/generic-data";

/*
  IP:
  Avatar (put Dialog in here)
*/

@observer
class Index extends React.Component {
  // Generic observables
  @observable genericValue = "" as string | boolean;
  @action.bound onChangeValue(val: string | boolean): void {
    this.genericValue = val;
  };

  @observable genericText = "first" as string;
  @action.bound onChangeText(val: string): void {
    this.genericText = val;
  };

  @observable genericBool = false;
  @action.bound onChangeBool(): void {
    this.genericBool = !this.genericBool;
  };

  render() {
    // const actions = [
    //   {
    //     label: "Cancel",
    //     onClick: () => {console.log("Cancel")}
    //   },
    //   {
    //     label: "OK",
    //     onClick: () => {this.onChangeBool()}
    //   }
    // ];

    const options = [
      {
        label: "First label",
        value: "first"
      },
      {
        label: "Second label",
        value: "second"
      }
    ];

    const contact = {
      hasAvatar: false,
      color:"red",
      username:"uiplayground",
      letter:"U",
      fullNameAndUsername:"UI Playground",
      mediumAvatarUrl:"http://peerio.com"
    };

    return(
      <div>
        <Avatar contact={contact} />

        <Button
          theme="affirmative inverted"
          onClick={this.onChangeBool}
        >
          Dialog
        </Button>

        {/* <Dialog
          active={this.genericBool}
          actions={actions}
          onCancel={this.onChangeBool}
        >
          Child content
        </Dialog> */}
        
        <Dropdown
          onChange={this.onChangeText}
          options={options}
          value={this.genericText}
        />

        <ProgressBar
          mode="indeterminate"
          theme="multicolor"
        />

        <RadioButtons
          value={this.genericText}
          onChange={this.onChangeText}
          options={options}
        />

        <Switch
          checked={this.genericBool}
          onChange={this.onChangeBool}
        />

      </div>
    );
  }
}

render(<Index />, document.getElementById("app"));
