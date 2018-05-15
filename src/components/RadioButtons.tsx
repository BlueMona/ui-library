import React from "react";
import { observer } from "mobx-react";

/*
    PROPS       type        description
    ----------------------------------------
    className   string
    onChange    function
    value       string      current value (optional in parent component. define this if you want a default selection)
    options     array       each object in array contains "value" and "label"
    ----------------------------------------
*/

interface Properties {
    className?: string
    onChange: (ev: any) => void
    value: string
    options: Option[]
}

interface Option {
    value: string
    label: string
}

// TODO: centralize some of the interfaces, like Option, Tooltip

@observer
export class RadioButtons extends React.Component<Properties> {
    setValue = (ev : any) => {
        this.props.onChange(ev.target.getAttribute("data-value"));
    }

    render() {
        const { value, options } = this.props;
        const radioOptions = [];

        for (let i = 0; i < options.length; i++) {
            radioOptions.push(
                <li key={options[i].value}>
                    <span
                        className={value === options[i].value
                            ? "material-icons clickable selected"
                            : "material-icons clickable"
                        }
                        data-value={options[i].value}
                        onClick={this.setValue}
                    >
                        {value === options[i].value
                            ? "radio_button_checked"
                            : "radio_button_unchecked"
                        }
                    </span>
                    <span className="label">
                        {options[i].label}
                    </span>
                </li>
            );
        }

        const classNames = this.props.className
            ? `p-radio ${this.props.className}`
            : "p-radio";

        return (
            <ul className={classNames}>
                {radioOptions}
            </ul>
        );
    }
}
