import React from "react";
import { observer } from "mobx-react";
import css from "classnames";

import { MaterialIcon } from "./MaterialIcon";
import { Tooltip } from "./Tooltip";

interface Contact {
    color: string
    fullNameAndUsername: string
    hasAvatar?: boolean
    isDeleted?: boolean
    letter: string
    mediumAvatarUrl: string
    username: string
    tofuError?: boolean
}

interface Properties {
    className?: string

    // Set true to make Avatar clickable: adds a bounce effect on hover and shows user's profile in a popup on click
    clickable?: boolean

    // Contact object
    contact: Contact

    size?: "tiny" | "small" | "medium" | "large" | "full"

    // Set true to have a tooltip, which will show user's username
    tooltip?: boolean
}

@observer
export class Avatar extends React.Component<Properties> {
    // When avatar is clickable, click opens ContactProfile dialog
    openContactDialog(ev : any) { // TODO: deal with ev : any
        console.log("click");
        console.log(ev);
    }

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
                        onClick={this.props.clickable ? this.openContactDialog : undefined}
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
