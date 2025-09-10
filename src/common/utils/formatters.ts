export const formatCategories = (...categories: string[]): string => {
    return [...new Set(categories)].join(', ')
}
