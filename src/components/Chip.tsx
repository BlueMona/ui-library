import React from "react";
import { observer } from "mobx-react";

import { Button } from "./Button";

// interface PropertiesWithoutDeletion {
//     className?: string
//     deletable: undefined
//     onDeleteClick: undefined
// }

interface PropertiesWithDeletion {
    className?: string
    deletable?: boolean
    onDeleteClick?: () => void
}

type Properties = PropertiesWithDeletion;

@observer
export class Chip extends React.Component<Properties> {
    render() {
        return (
            <div
                className={
                    this.props.className
                        ? `p-chip ${this.props.className}`
                        : "p-chip"
                }
            >
                <span className="content">{this.props.children}</span>
                {this.props.deletable
                    ? <Button
                        icon="remove"
                        onClick={this.props.onDeleteClick}
                        theme="small"
                    />
                    : null
                }
            </div>
        );
    }
}