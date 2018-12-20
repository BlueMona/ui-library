export interface ActionProps {
    label: string;
    onClick: () => void;
    theme?: string;
    disabled?: boolean;
}
export interface ContactProps {
    color: ContactColorProps;
    fullName: string;
    fullNameAndUsername: string;
    hasAvatar?: boolean;
    isDeleted?: boolean;
    letter: string;
    mediumAvatarUrl: string;
    username: string;
    tofuError?: boolean;
}
export interface ContactColorProps {
    value: string;
    isLight: boolean;
}
export interface OptionProps {
    value: string;
    label: string;
}
