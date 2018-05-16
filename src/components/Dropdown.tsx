import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

export interface DropdownProps {
    className?: string
    onChange: (ev: any) => void // deal with this
    label?: string
    value: string
    options: Option[]
}

export interface Option {
    value: string
    label: string
}

@observer
export class Dropdown extends React.Component<DropdownProps> {
    // Bool to show or hide the dropdown
    @observable isActive = false;
    @action.bound activate() {
        this.isActive = true;
    }

    // Function to change the value, relies on parent component"s onChange function
    @action.bound setValue(ev: any) {
        this.props.onChange(ev.target.getAttribute("data-value"));
        this.isActive = false;
    }

    // Make the dropdown close when you click away
    @observable isHover = false;

    @action.bound handleMouseEnter() {
        this.isHover = true;
    }

    @action.bound handleMouseLeave() {
        this.isHover = false;
    }

    componentDidMount() {
        window.addEventListener("click", this.handleClick, false);
    }

    componentWillUnmount() {
        window.removeEventListener("click", this.handleClick);
    }

    @action.bound handleClick() {
        if (this.isActive && !this.isHover) {
            this.isActive = false;
        }
    }

    render() {
        const { value, options } = this.props;
        const dropdownOptions : any = [];
        const labels : any = {};

        for (let i = 0; i < options.length; i++) {
            dropdownOptions.push(
                <li key={options[i].value}
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
            : "p-dropdown";

        return (
            <div className={classNames}>
                {this.props.label &&
                    <span className="label">
                        {this.props.label}:
                    </span>
                }
                <div className="inputs-container"
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                >
                    <div className="selector clickable" onClick={this.activate}>
                        <span className="input">
                            {labels[value]}
                        </span>
                        <span className="material-icons">
                            arrow_drop_down
                        </span>
                    </div>
                    {this.isActive &&
                        <ul className={this.isActive ? "active" : undefined}>
                            {dropdownOptions}
                        </ul>
                    }
                </div>
            </div>
        );
    }
}