export const forEach = <T>(
  object: Record<string, T>,
  callback: (value: T) => void
) => Object.values(object).forEach(callback)
