import { BoardGameCard } from '../BoardGameCard'
import type { BoardGame } from '../../common/types/interface'

interface BoardGamesProps {
    games: BoardGame[]
}

export const BoardGames = ({ games }: BoardGamesProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {games.map((game) => (
                <BoardGameCard key={game.id} game={game} />
            ))}
        </div>
    )
}
