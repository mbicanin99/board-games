import * as React from 'react'

export type ButtonColor = 'white' | 'yellow' | 'black'
export type ButtonSize = 'small' | 'medium' | 'large' | 'full'
export type ButtonType = 'button' | 'submit' | 'reset'
export type ButtonTarget = '_blank' | '_self'

export interface ButtonProps {
    label: React.ReactNode
    color?: ButtonColor
    size?: ButtonSize
    disabled?: boolean
    onClick?: () => void
    href?: string
    type?: ButtonType
    className?: string
    target?: ButtonTarget
}

export interface ButtonColorConfig {
    base: string
    text: string
    border: string
    hover: string
    active: string
    textHover?: string
}

