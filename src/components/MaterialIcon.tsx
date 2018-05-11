import React from 'react';
import css from 'classnames';
import { Tooltip } from './Tooltip';

/*
    PROPS           type        description
    ----------------------------------------
    className       string
    icon            string      Material Icon name with underscores for spaces

    tooltip         string
    tooltipPosition string

    active          bool        default false. set to true to enable 'active' style (e.g. $peerio-teal)
    ----------------------------------------

    TODO: size (rarely deviates from 24px, currently handled at CSS level)
*/

interface Properties {
    active?: boolean
    className?: string
    icon: string
    tooltip?: string
    tooltipPosition?: 'top' | 'right' | 'bottom' | 'left'
}

export class MaterialIcon extends React.Component<Properties> {
    render() {
        return (
            <span className={css(
                'material-icons',
                this.props.className,
                { active: this.props.active }
            )}>
                {this.props.icon}
                {this.props.tooltip
                    ? <Tooltip text={this.props.tooltip}
                        position={this.props.tooltipPosition}
                    />
                    : null
                }
            </span>
        );
    }
}