import React from 'react';
import { observer } from 'mobx-react';

import Button from './Button';

@observer
class Chip extends React.Component {
    render() {
        return (
            <div
                className={
                    this.props.className
                        ? `p-chip ${this.props.className}`
                        : 'p-chip'
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

module.exports = Chip;
