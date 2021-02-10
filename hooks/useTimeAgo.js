const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
]

const getDateDiffs = (timestamp) => {
  const now = Date.now()
  const elapsed = (timestamp - now) / 1000

  for (const [unit, secondInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondInUnit || unit === "second") {
      const value = Math.round(elapsed / secondInUnit)
      return { value, unit }
    }
  }
}

export default function useTimeAgo(timestamp) {
  const { value, unit } = getDateDiffs(timestamp)
  const rft = new Intl.RelativeTimeFormat("es", {
    style: "short",
  })

  return rft.format(value, unit)
}
