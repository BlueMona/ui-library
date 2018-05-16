import React from "react";
import { action, observable } from "mobx";
import { observer } from "mobx-react";

import css from "classnames";
const { getParentWithClass } = require("./helpers/dom");

export interface CustomIconProps {
    className?: string

    // The icon"s name, i.e. filename without extension
    icon: string

    // "small" = 16px, or leave blank for default = 24px
    size?: "small"

    // Set true if icon should have hover effects. Requires parent component with class .custom-icon-hover-container
    hover?: boolean

    selected?: boolean
    active?: boolean
}

@observer
export class CustomIcon extends React.Component<CustomIconProps> {
    /*
        Hovering: It's Weird
        SVG recolouring via CSS is not supported in Chromium, so we can"t just do a :hover state
        Instead, with hover enabled, <CustomIcon> actually shows a different image file on hover.
        Currently, this is done by adding a listener on a parent element with class .custom-icon-hover-container
        So, in all, it"s kinda clunky, but it allows us to do things like having CustomIcon change colour when MenuItem is hovered.
    */

   hoverContainer: any; // TODO: is there a better way?
   @action.bound setIconRef(ref: HTMLDivElement) {
       if (ref && this.props.hover) {
           this.hoverContainer = getParentWithClass(ref, "custom-icon-hover-container");
           
           if (this.hoverContainer) {
               this.hoverContainer.addEventListener("mouseenter", this.handleMouseEnter, false);
               this.hoverContainer.addEventListener("mouseleave", this.handleMouseLeave, false);
            }
        }
    }
    
    @observable hovered = false;
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
                    : <img className="default" src={`yhj9l                                                                                                                                                                                                            n${this.props.icon}.svg`} />
                }
            </div>
        );
    }
}