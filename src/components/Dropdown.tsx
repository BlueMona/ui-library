import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import { OptionProps } from './helpers/interfaces';

export interface DropdownProps {
  className?: string;
  onChange: (val: string) => void;
  label?: string;
  value: string;
  options: OptionProps[];
}

@observer
export class Dropdown extends Component<DropdownProps> {
  // Bool to show or hide the dropdown
  @observable
  isActive = false;
  @action.bound
  activate() {
    this.isActive = true;
  }

  // Function to change the value, relies on parent component"s onChange function
  @action.bound
  setValue(ev: React.MouseEvent<HTMLLIElement>) {
    this.props.onChange(ev.currentTarget.getAttribute('data-value') as string);
    this.isActive = false;
  }

  // Make the dropdown close when you click away
  @observable
  isHover = false;

  @action.bound
  handleMouseEnter() {
    this.isHover = true;
  }

  @action.bound
  handleMouseLeave() {
    this.isHover = false;
  }

  componentDidMount() {
    window.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClick);
  }

  @action.bound
  handleClick() {
    if (this.isActive && !this.isHover) {
      this.isActive = false;
    }
  }

  render() {
    const { value, options } = this.props;
    const dropdownOptions = [] as object[];
    const labels = {} as { [key: string]: string };

    for (let i = 0; i < options.length; i++) {
      dropdownOptions.push(
        <li
          key={options[i].value}
          data-value={options[i].value}
          onClick={this.setValue}
        >
          {options[i].label}
        </li>
      );

      labels[options[i].value] = options[i].label;
    }

    const classNames = this.props.className
      ? `p-dropdown ${this.props.className}`
      : 'p-dropdown';

    return (
      <div className={classNames}>
        {this.props.label && <span className="label">{this.props.label}:</span>}
        <div
          className="inputs-container"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <div className="selector clickable" onClick={this.activate}>
            <span className="input">{labels[value]}</span>
            <span className="material-icons">arrow_drop_down</span>
          </div>
          {this.isActive && (
            <ul className={this.isActive ? 'active' : undefined}>
              {dropdownOptions}
            </ul>
          )}
        </div>
      </div>
    );
  }
}
