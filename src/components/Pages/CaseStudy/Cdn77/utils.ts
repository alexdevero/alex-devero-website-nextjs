export const getWorkDuration = (startDateTimestamp: string, endDateTimestamp: string): number => {
  const startDate = new Date(startDateTimestamp)
  const endDate = endDateTimestamp === 'present' ? new Date() : new Date(endDateTimestamp)
  const duration = endDate.getTime() - startDate.getTime()
  const months = Math.floor(duration / (1000 * 60 * 60 * 24 * 30))

  return months
}
