import React from "react";
import { observer } from "mobx-react";
import css from "classnames";

import { ContactProps } from "./helpers/interfaces"
import { MaterialIcon } from "./MaterialIcon";
import { Tooltip } from "./Tooltip";

export interface AvatarProps {
    className?: string
    
    // Contact object
    contact: ContactProps
    
    size?: "tiny" | "small" | "medium" | "large" | "full"

    // Set true to have a tooltip, which will show user"s username
    tooltip?: boolean
}

@observer
export class Avatar extends React.Component<AvatarProps & ({clickable: true, onClick: (ev: React.MouseEvent<HTMLDivElement>) => void} | {clickable?: false})> {
    render() {
        const c = this.props.contact;

        let errorIcon;
        if (c.isDeleted) {
            errorIcon = <MaterialIcon icon="remove_circle" />;
        } else if (c.tofuError) {
            errorIcon = <MaterialIcon icon="error" />;
        }

        return (
            <div className="p-avatar">
                <div className="contents">
                    <div
                        className={css(
                            "image-container",
                            this.props.className,
                            `${this.props.size || "medium"}`,
                            { clickable: this.props.clickable }
                        )}
                        style={!c.hasAvatar ? { backgroundColor: c.color } : {}}
                        onClick={this.props.clickable ? this.props.onClick : undefined}
                    >
                        {c.hasAvatar
                            ? <img src={c.mediumAvatarUrl} alt={c.username} />
                            : c.letter
                        }
                    </div>
                </div>
                {errorIcon}
                {this.props.tooltip
                    ? <Tooltip
                        text={c.fullNameAndUsername}
                        position="top"
                    />
                    : null
                }
            </div>
        );
    }
}
