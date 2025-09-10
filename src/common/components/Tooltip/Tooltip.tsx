import React, { useState } from 'react'

interface TooltipProps {
    text: string
    children: React.ReactNode
}

export const Tooltip = ({ text, children }: TooltipProps) => {
    const [visible, setVisible] = useState(false)

    return (
        <div className="relative inline-block">
            <div
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
            >
                {children}
            </div>

            {visible && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max max-w-[200px] bg-black bg-opacity-80 text-white text-xs p-2 rounded shadow-lg z-10 whitespace-normal text-center break-words">
                    {text}
                </div>
            )}
        </div>
    )
}
