export const getNextQuarterAndYear = (): {
  nextQuarter: number
  nextQuarterYear: number
  quarter: number
  year: number
} => {
  const today = new Date()
  const quarter = Math.floor((today.getMonth() + 3) / 3)
  const year = today.getFullYear()

  if (quarter > 4) {
    return { quarter: 1, year: year + 1, nextQuarter: 2, nextQuarterYear: year + 1 }
  }

  return {
    quarter,
    year,
    nextQuarter: quarter + 1 > 4 ? 1 : quarter + 1,
    nextQuarterYear: quarter + 1 > 4 ? year + 1 : year,
  }
}

export const formatAvailabilityMessage = (
  quarter: number,
  year: number,
  nextQuarter: number,
  nextQuarterYear: number
): string => {
  if (year === nextQuarterYear) {
    return `Q${quarter} and Q${nextQuarter} ${year}`
  }

  return `Q${quarter} ${year} and Q${nextQuarter} ${nextQuarterYear}`
}
