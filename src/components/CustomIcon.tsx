import React from "react";
import { action, observable } from "mobx";
import { observer } from "mobx-react";

import css from "classnames";
const { getParentWithClass } = require("../helpers/dom"); // TODO: figure out the helper functions

interface Properties {
    className?: string
    icon: string
    size?: string
    hover?: boolean
    selected?: boolean
    active?: boolean
}

@observer
export class CustomIcon extends React.Component<Properties> {
    @observable hovered = false;

    hoverContainer = null as any; // TODO: another ref as any

    @action.bound setIconRef(ref: HTMLDivElement) {
        if (ref && this.props.hover) {
            this.hoverContainer = getParentWithClass(ref, "custom-icon-hover-container");

            if (this.hoverContainer) {
                this.hoverContainer.addEventListener("mouseenter", this.handleMouseEnter, false);
                this.hoverContainer.addEventListener("mouseleave", this.handleMouseLeave, false);
            }
        }
    }

    @action.bound handleMouseEnter() { this.hovered = true; }
    @action.bound handleMouseLeave() { this.hovered = false; }

    componentWillUnmount() {
        if (this.hoverContainer) {
            this.hoverContainer.removeEventListener("mouseenter", this.handleMouseEnter, false);
            this.hoverContainer.removeEventListener("mouseleave", this.handleMouseLeave, false);
        }
    }

    render() {
        return (
            <div
                className={css(
                    "p-custom-icon",
                    this.props.size,
                    this.props.className,
                    {
                        hovered: this.hovered,
                        active: this.props.active
                    }
                )}
                ref={this.setIconRef}
            >
                {(this.props.hover && this.hovered) || this.props.selected
                    ? <img className="hover" src={`./static/custom-icons/${this.props.icon}-hover.svg`} />
                    : <img className="default" src={`./static/custom-icons/${this.props.icon}.svg`} />
                }
            </div>
        );
    }
}