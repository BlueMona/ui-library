import React from "react";
import ReactDOM from "react-dom";

import { action, observable } from "mobx";
import { observer } from "mobx-react";

import css from "classnames";
import { getDataProps, getParentWithClass } from "../helpers/dom";

import { Button } from "./Button";
import { Tooltip } from "./Tooltip";

const appRoot = document.getElementById("root") as HTMLElement;

// TODO: many "any" types

interface Properties {
    className?: string

    /*
        The starting point where MenuGlobal will be drawn from. Default "top-left"
        Somewhat counterintuitive e.g. "top-left" will start from top-left and draw downward and to the right
    */
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"

    icon?: string
    customIcon?: string
    customButton?: any

    tooltip?: string
    tooltipPosition?: "top" | "bottom" | "left" | "right"

    theme?: string

    onClick?: () => void
    disabled?: boolean
}

@observer
export class Menu extends React.Component<Properties> {
    @observable menuActive = false;
    @observable menuVisible = false;

    @observable style = {
        top: "inherit",
        bottom: "inherit",
        left: "inherit",
        right: "inherit"
    };

    menuButtonRef : any;
    scrollContainer : any;
    hideMenuTimeout : any;

    @action.bound setMenuButtonRef(ref : any) {
        if (ref) {
            this.menuButtonRef = ref;
            this.scrollContainer = getParentWithClass(ref, "scrollable");
        }
    }

    @action.bound setMenuContentRef(ref : any) {
        if (ref) this.menuVisible = true;
    }

    @action.bound handleMenuClick() {
        if (this.hideMenuTimeout) {
            this.menuActive = false;
            clearTimeout(this.hideMenuTimeout);
            this.hideMenuTimeout = null;
        }

        this.setStyle();
        this.menuActive = true;

        window.addEventListener("click", this.hideMenu, true);
        window.addEventListener("keyup", this.handleKeyUp);

        if (this.scrollContainer) {
            this.scrollContainer.addEventListener("scroll", this.hideMenu);
        }
    }

    @action.bound handleKeyUp(ev : any) {
        if (ev.keyCode === 27) this.hideMenu();
    }

    @action.bound hideMenu() {
        // Need this timeout to delay menu hide so that the hide animation fires
        this.menuVisible = false;
        this.hideMenuTimeout = setTimeout(() => {
            this.menuActive = false;
            this.hideMenuTimeout = null;
        }, 250);

        window.removeEventListener("click", this.hideMenu, true);
        window.removeEventListener("keyup", this.handleKeyUp);

        if (this.scrollContainer) {
            this.scrollContainer.removeEventListener("scroll", this.hideMenu);
        }
    }

    setStyle() {
        const { width, height, left, top } = this.menuButtonRef.getBoundingClientRect();
        const windowX = window.innerWidth;
        const windowY = window.innerHeight;
        
        const position = !!this.props.position ? this.props.position : "top-left";
        const [posY, posX] = position.split("-");

        if (posY === "top") this.style.top = `${top}px`;
        if (posY === "bottom") this.style.bottom = `${windowY - top - height}px`;
        if (posX === "left") this.style.left = `${left}px`;
        if (posX === "right") this.style.right = `${windowX - left - width}px`;
    }

    render() {
        const menuButton = (
            <div
                key="p-menu"
                className={css(
                    "p-menu",
                    this.props.className,
                    { clickable: this.menuActive }
                )}
                ref={this.setMenuButtonRef}
                onClick={this.props.onClick}
            >
                <Button
                    icon={this.props.icon}
                    customIcon={this.props.customIcon}
                    onClick={this.handleMenuClick}
                    disabled={this.menuActive || this.props.disabled}
                >
                    {this.props.customButton}
                </Button>

                {this.props.tooltip
                    ? <Tooltip
                        text={this.props.tooltip}
                        position={this.props.tooltipPosition || "top"}
                    />
                    : null
                }
            </div>
        );

        if (!this.menuActive) return menuButton;

        const menuContent = (
            <ul
                key="p-menu-content"
                className={css(
                    "p-menu-content",
                    this.props.theme,
                    { visible: this.menuVisible }
                )}
                style={this.style}
                ref={this.setMenuContentRef}
                {...getDataProps(this.props)}
            >
                {this.props.children}
            </ul>
        );

        return [
            menuButton,
            ReactDOM.createPortal(
                menuContent,
                appRoot
            )
        ];
    }
}
