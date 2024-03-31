export function useGenerateDateArray(count: number) {
  let max = new Date().getFullYear() - 18
  let min = max - count
  let years = []
  for (var i = max; i >= min; i--) {
    years.push({ label: `${i}`, value: `${i}` })
  }
  return years
}
///https://finity.cssninja.io/
