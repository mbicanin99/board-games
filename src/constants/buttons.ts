import type { ButtonColor, ButtonColorConfig } from '../common/types/interface/button.ts'

export const BUTTON_BASE_CLASSES =
    'rounded-md font-medium transition-colors'

export const BUTTON_DISABLED_CLASSES = 'opacity-50 cursor-not-allowed'

export const BUTTON_SIZES = {
    small: 'px-2 py-1 text-xs font-normal w-fit',
    medium: 'px-3 py-1 text-sm w-fit',
    large: 'px-6 py-3 text-base w-fit',
    full: 'w-full px-4 py-2 text-base'
}

export const BUTTON_COLORS: Record<ButtonColor, ButtonColorConfig> = {
    white: {
        base: 'bg-white',
        text: 'text-black',
        border: 'border border-yellow-400',
        hover: 'hover:bg-yellow-400',
        active: 'active:bg-yellow-500',
        textHover: 'hover:text-white'
    },
    black: {
        base: 'bg-black',
        text: 'text-white',
        border: 'border border-black',
        hover: 'hover:bg-gray-900',
        active: 'active:bg-gray-800',
    },
    yellow: {
        base: 'bg-yellow-400',
        text: 'text-white',
        border: 'border border-yellow-400',
        hover: 'hover:bg-yellow-500',
        active: 'active:bg-yellow-600',
    }
}

