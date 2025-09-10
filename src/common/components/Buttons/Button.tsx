import type { ButtonProps } from '../../types/interface'
import { BUTTON_BASE_CLASSES, BUTTON_COLORS, BUTTON_DISABLED_CLASSES, BUTTON_SIZES } from '../../../constants'

export const Button = ({
                           label,
                           color = 'white',
                           size = 'medium',
                           disabled = false,
                           onClick,
                           href,
                           type = 'button',
                           className = '',
                           target = '_self'
                       }: ButtonProps) => {
    const colorConfig = BUTTON_COLORS[color] || BUTTON_COLORS.white
    const sizeClasses = BUTTON_SIZES[size]
    const disabledClasses = disabled ? BUTTON_DISABLED_CLASSES : ''
    const combinedClasses = `${BUTTON_BASE_CLASSES} ${colorConfig.base} ${colorConfig.text} ${colorConfig.textHover || ''}  
    ${colorConfig.border} ${colorConfig.hover} ${colorConfig.active} ${sizeClasses} ${disabledClasses} ${className}`

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                className={combinedClasses}
                onClick={onClick}
            >
                {label}
            </a>
        )
    }

    return (
        <button type={type} className={combinedClasses} disabled={disabled} onClick={onClick}>
            {label}
        </button>
    )
}
