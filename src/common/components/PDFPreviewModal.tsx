import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import type { ReactNode } from 'react'
import { Button } from './Buttons'

interface PDFPreviewModalProps<T> {
    items: T[]
    renderItem: (item: T) => ReactNode
    onClose: () => void
    title?: string
}

export const PDFPreviewModal = <T,>({
                                        items,
                                        renderItem,
                                        onClose,
                                        title = 'PDF Preview'
                                    }: PDFPreviewModalProps<T>) => {
    const contentRef = useRef<HTMLDivElement>(null)

    const handlePrint = useReactToPrint({
        contentRef: contentRef, // Use contentRef instead of content
        documentTitle: title,
        onAfterPrint: onClose,
    })

    return (
        <div className="flex items-center justify-center fixed inset-0 z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-3xl max-h-[90vh] overflow-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <button onClick={onClose} type="button">
                        <img
                            src="/src/assets/icons/close.svg"
                            alt="Close"
                            className="w-6 h-6 cursor-pointer"
                        />
                    </button>
                </div>

                <div ref={contentRef} className="flex flex-col gap-4">
                    {items.map((item, index) => (
                        <div key={index}>{renderItem(item)}</div>
                    ))}
                </div>

                <div className="flex justify-center mt-4">
                    <Button
                        label="Download PDF"
                        color="black"
                        size="medium"
                        onClick={handlePrint}
                    />
                </div>
            </div>
        </div>
    )
}
