import React from "react";
import { observer } from "mobx-react";
// import uiStore from "~/stores/ui-store";
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
    clickable?: boolean
    contact: Contact
    size?: "tiny" | "small" | "medium" | "large" | "full"
    tooltip?: boolean
}

@observer
class Avatar extends React.Component<Properties> {
    // When avatar is clickable, click opens ContactProfile dialog
    openContactDialog(ev: any) {
        if (!this.props.clickable) return;
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
                        onClick={this.openContactDialog}
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

module.exports = Avatar;
