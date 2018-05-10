import React from "react";

/*
    PROPS           type        description
    ----------------------------------------
    className       string
    size            string      tiny, small, medium (default), large, full
    clickable       bool
    tooltip         bool

    contact         string      *
    username        string      * need one of contact or username
    ----------------------------------------
*/

interface TestComponentProps {
  /** The cool message to show in our component */
  message: string
  size: 'small' | 'big'
  className: string
  clickable: boolean
  tooltip: boolean
}

type MyCool = TestComponentProps & ({ contact: string } | { username: string })

export class TestComponent extends React.Component<MyCool> {
  render() {
    return (
      <div>{this.props.message}</div>
    );
  }
}
