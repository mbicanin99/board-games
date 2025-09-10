import { formatCategories } from '../common/utils'
import { Difficulty, Rating } from '../common/types/enums'
import type { BoardGame } from '../common/types/interface'

export const BOARD_GAMES_PAGE_TITLE = 'Board Games'

export const BOARD_GAME_DESCRIPTION = {
    CATAN: 'Trade build, and settle in this modern classic. Compete to expand your settlements and control the island of Catan.',
    DIXIT: 'A creative storytelling game where players use beautifully illustrated cards to bluff and guess each other\'s stories.',
    AZUL: 'A tile-drafting game where players take turns selecting colorful tiles to complete beautiful patterns.',
    TICKET_TO_RIDE: 'Build your train routes across the USA in this gateway strategy game. Easy to learn and fun for all ages.',
    CODENAMES: 'A fast-paced word game of deduction where teams try to guess secret words based on clever clues'
}

export const BOARD_GAME_URL = {
    CATAN: 'https://www.catan.com/',
    DIXIT: 'https://www.libellud.com/en/our-games/dixit/',
    AZUL: 'https://www.nextmove-games.com/en/azul/',
    TICKET_TO_RIDE: 'https://www.daysofwonder.com/game/ticket-to-ride/',
    CODENAMES: 'https://www.codenamesgame.com/?utm_source=chatgpt.com'
}

export const CATEGORY = {
    STRATEGY: 'Strategy',
    TRADING: 'Trading',
    PARTY: 'Party',
    CREATIVE: 'Creative',
    ABSTRACT: 'Abstract',
    FAMILY: 'Family',
    WORD: 'Word'
}

export const AGE_GROUP = {
    EIGHT_PLUS: '8+',
    TEN_PLUS: '10+'
}

export const PLAYER_COUNT = {
    TWO_TO_FOUR: '2-4',
    THREE_TO_FOUR: '3-4',
    THREE_TO_SIX: '3-6',
    TWO_TO_FIVE: '2-5',
    FOUR_TO_EIGHT_PLUS: '4-8+'
}

export const PLAYTIME = {
    MIN_15_30: '15-30 minutes',
    MIN_30_45: '30-45 minutes',
    MIN_45_60: '45-60 minutes',
    MIN_30: '30 minutes',
    MIN_60_90: '60-90 minutes'
}

export const boardGames: BoardGame[] = [
    {
        id: 1,
        slug: 'catan',
        name: 'Catan',
        description: BOARD_GAME_DESCRIPTION.CATAN,
        players: PLAYER_COUNT.THREE_TO_FOUR,
        playtime: PLAYTIME.MIN_60_90,
        age: AGE_GROUP.TEN_PLUS,
        category: formatCategories(CATEGORY.STRATEGY, CATEGORY.TRADING),
        difficulty: Difficulty.MEDIUM,
        website: BOARD_GAME_URL.CATAN,
        rating: Rating.FOUR
    },
    {
        id: 2,
        slug: 'dixit',
        name: 'Dixit',
        description: BOARD_GAME_DESCRIPTION.DIXIT,
        players: PLAYER_COUNT.THREE_TO_SIX,
        playtime: PLAYTIME.MIN_30,
        age: AGE_GROUP.EIGHT_PLUS,
        category: formatCategories(CATEGORY.PARTY, CATEGORY.CREATIVE),
        difficulty: Difficulty.EASY,
        website: BOARD_GAME_URL.DIXIT,
        rating: Rating.FIVE,
    },
    {
        id: 3,
        slug: 'azul',
        name: 'Azul',
        description: BOARD_GAME_DESCRIPTION.AZUL,
        players: PLAYER_COUNT.TWO_TO_FOUR,
        playtime: PLAYTIME.MIN_30_45,
        age: AGE_GROUP.EIGHT_PLUS,
        category: formatCategories(CATEGORY.ABSTRACT, CATEGORY.STRATEGY),
        difficulty: Difficulty.MEDIUM,
        website: BOARD_GAME_URL.AZUL,
        rating: Rating.FOUR,
    },
    {
        id: 4,
        slug: 'ticket-to-ride',
        name: 'Ticket to Ride',
        description: BOARD_GAME_DESCRIPTION.TICKET_TO_RIDE,
        players: PLAYER_COUNT.TWO_TO_FIVE,
        playtime: PLAYTIME.MIN_45_60,
        age: AGE_GROUP.EIGHT_PLUS,
        category: formatCategories(CATEGORY.ABSTRACT, CATEGORY.FAMILY),
        difficulty: Difficulty.EASY,
        website: BOARD_GAME_URL.TICKET_TO_RIDE,
        rating: Rating.FOUR,
    },
    {
        id: 5,
        slug: 'codenames',
        name: 'Codenames',
        description: BOARD_GAME_DESCRIPTION.CODENAMES,
        players: PLAYER_COUNT.FOUR_TO_EIGHT_PLUS,
        playtime: PLAYTIME.MIN_15_30,
        age: AGE_GROUP.TEN_PLUS,
        category: formatCategories(CATEGORY.WORD, CATEGORY.PARTY),
        difficulty: Difficulty.EASY,
        website: BOARD_GAME_URL.CODENAMES,
        rating: Rating.FOUR,
    }
]

export const difficultyTooltip: Record<string, string> = {
    Easy: "Easy to learn and play - perfect for beginners and casual game nights.",
    Medium: "Some strategy involved - good for players who enjoy thinking a few moves ahead.",
    Hard: "Deep strategy and complex rules - ideal for experienced gamers."
}


