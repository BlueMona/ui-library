import React, { Component } from 'react';
export interface ButtonProps {
    className?: string;
    style?: object;
    /** Button will render as an <a> element */
    href?: string;
    /**
     * If `label` prop exists, this element's children will be ignored and the
     * `label` will be used instead. Arbitrary React content can be used.
     */
    label?: React.ReactChild;
    /** To use MaterialIcon */
    icon?: string;
    /** To use CustomIcon */
    customIcon?: string;
    /** Makes button unclickable and applies "disabled" styling */
    disabled?: boolean;
    /** Makes button blue or other "selected" colour */
    selected?: boolean;
    /** Makes button teal or other "active" colour */
    active?: boolean;
    /** HTML tab index */
    tabIndex?: number;
    /** Label for E2E desktop tests */
    testId?: string;
    onClick?: (ev?: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseEnter?: (ev?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    onMouseLeave?: (ev?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    /** Tooltip text */
    tooltip?: string;
    /** Where tooltip will be rendered. Defaults to "top" */
    tooltipPosition?: 'top' | 'right' | 'bottom' | 'left';
    /** Blank for default = 24px, "small" = 16px */
    tooltipSize?: 'small';
    /** Various themes for styling.
     *
     * * (default): font colour $color-affirmative, background transparent
     * * primary: font color $text-dark-default
     * * secondary: font color $text-dark-inactive (for secondary action e.g. dialog "cancel")
     * * inverted: font color $text-light-default
     * * affirmative: font color $white, background $color-affirmative
     * * small: collapses padding
     * * link: style button as link (look like <a>)
     * * no-hover: remove hover effects
     */
    theme?: string;
}
export declare class Button extends Component<ButtonProps> {
    render(): JSX.Element;
}
