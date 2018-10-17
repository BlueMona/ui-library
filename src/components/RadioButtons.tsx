import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { OptionProps } from './helpers/interfaces';

export interface RadioButtonsProps {
  className?: string;
  onChange: (val: string) => void;
  value: string;
  options: OptionProps[];
}

@observer
export class RadioButtons extends Component<RadioButtonsProps> {
  setValue = (ev: React.MouseEvent<HTMLSpanElement>) => {
    this.props.onChange(ev.currentTarget.getAttribute('data-value') as string);
  };

  render() {
    const { value, options } = this.props;
    const radioOptions = [];

    for (let i = 0; i < options.length; i++) {
      radioOptions.push(
        <li key={options[i].value}>
          <span
            className={
              value === options[i].value
                ? 'material-icons clickable selected'
                : 'material-icons clickable'
            }
            data-value={options[i].value}
            onClick={this.setValue}
          >
            {value === options[i].value
              ? 'radio_button_checked'
              : 'radio_button_unchecked'}
          </span>
          <span className="label">{options[i].label}</span>
        </li>
      );
    }

    const classNames = this.props.className
      ? `p-radio ${this.props.className}`
      : 'p-radio';

    return <ul className={classNames}>{radioOptions}</ul>;
  }
}
