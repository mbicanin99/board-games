import { type Difficulty, Rating } from '../enums'

export interface BoardGame {
    id: number
    slug: string
    name: string
    description: string
    players: string
    playtime: string
    age: string
    category: string
    difficulty: Difficulty
    website: string
    rating: Rating
}
