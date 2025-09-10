import { BoardGames } from '../../components/BoardGames/BoardGames.tsx'
import { BOARD_GAMES_PAGE_TITLE, boardGames } from '../../constants'
import { Button } from '../../common/components/Buttons'
import { PDFPreviewModal } from '../../common/components/PDFPreviewModal/PDFPreviewModal.tsx'
import { useState } from 'react'
import { BoardGameCard } from '../../components/BoardGameCard'

export const BoardGamesPage = () => {
    const [showPDFModal, setShowPDFModal] = useState(false)

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-200 p-8 gap-3">
            <h1 className="text-4xl font-bold text-center mb-10">{ BOARD_GAMES_PAGE_TITLE }</h1>
            <div className="flex justify-end w-full">
                <Button
                    label="Save as PDF"
                    color="black"
                    size="medium"
                    onClick={() => setShowPDFModal(true)}
                />
            </div>
            <BoardGames games={boardGames} />

            {showPDFModal && (
                <PDFPreviewModal
                    items={boardGames}
                    onClose={() => setShowPDFModal(false)}
                    renderItem={(game) => <BoardGameCard game={game} />}
                    title="Board Games Collection" // Optional: custom title
                />
            )}
        </div>
    )
}
