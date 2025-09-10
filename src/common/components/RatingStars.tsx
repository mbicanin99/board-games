import type { Rating } from '../types/enums'

interface RatingStarsProps {
    value: Rating
    max?: number
}

export const RatingStars = ({ value, max = 5 }: RatingStarsProps) => {
    return (
        <div className="flex gap-1">
            {Array.from({ length: max }, (_, index) => (
                <img
                    key={index}
                    src={index < value
                        ? '/src/assets/icons/star-rating.svg'
                        : '/src/assets/icons/star-rating-empty.svg'
                    }
                    alt={index < value ? 'Filled Star' : 'Empty Star'}
                    className="w-3 h-3"
                />
            ))}
        </div>
    )
}
