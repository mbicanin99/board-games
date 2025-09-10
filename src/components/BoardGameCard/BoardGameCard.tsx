import type { BoardGame } from '../../common/types/interface'
import { RatingStars } from '../RatingStars/RatingStars.tsx'
import { Button } from '../../common/components/Buttons'
import { Tooltip } from '../../common/components/Tooltip/Tooltip.tsx'
import { difficultyTooltip } from '../../constants'

interface BoardGameCardProps {
    game: BoardGame
}

export const BoardGameCard = ({ game }: BoardGameCardProps) => {
    return (
        <div className="flex flex-col justify-between gap-2 bg-white shadow rounded-lg p-6">
            <div className="flex flex-col-reverse items-start mb-1 sm:flex-row sm:justify-between sm:items-end">
                <h2 className="text-lg font-bold">{game.name}</h2>
                <RatingStars value={game.rating} />
            </div>

            <p className="flex-1 text-gray-600">{game.description}</p>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start sm:gap-4 text-sm text-gray-700 w-full gap-2">
                <div className="flex flex-col gap-2 sm:gap-2">
                    <div className="flex flex-row gap-2 items-center">
                        <img src="/src/assets/icons/group.svg" alt="Players" className="w-4 h-4" />
                        <div>{game.players}</div>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <img src="/src/assets/icons/calendar.svg" alt="Calendar" className="w-4 h-4" />
                        <div>{game.age}</div>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <img src="/src/assets/icons/chess.svg" alt="Chess" className="w-4 h-4" />
                        <div>{game.category}</div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 sm:items-end text-right sm:text-right">
                    <div className="flex flex-row gap-2 items-center">
                        <img src="/src/assets/icons/clock.svg" alt="Clock" className="w-4 h-4" />
                        <div>{game.playtime}</div>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <img src="/src/assets/icons/chart.svg" alt="Chart" className="w-4 h-4" />
                        <div className="flex flex-row gap-1">
                            <div>{game.difficulty}</div>
                            <Tooltip text={difficultyTooltip[game.difficulty] || ""}>
                                <img src="/src/assets/icons/info.svg" alt="Info" className="w-4 h-4 cursor-pointer" />
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>

            <Button
                label="Learn more"
                href={game.website}
                color="white"
                size="small"
            />
        </div>
    )
}
