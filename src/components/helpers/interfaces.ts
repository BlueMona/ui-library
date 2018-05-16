export interface ActionProps {
    label: string
    onClick: () => void
    theme?: string
    disabled?: boolean
}

export interface ContactProps {
    color: string
    fullNameAndUsername: string
    hasAvatar?: boolean
    isDeleted?: boolean
    letter: string
    mediumAvatarUrl: string
    username: string
    tofuError?: boolean
}