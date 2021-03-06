/**
 * Function that converts 12 hour AM/PM format to 24 hour military format
 *
 * For more details:
 * {@link https://www.hackerrank.com/challenges/time-conversion/}
 *
 * @param {String} s String that represents time
 * @returns {String} String that represents converted time
 *
 */

function timeConversion(s) {
  const timeParts = s.split(":")
  const hour = timeParts[0]
  const minutes = timeParts[1]
  const seconds = timeParts[2].substring(0, 2)
  const meridiem = timeParts[2].substring(2)

  let convertedHour = ""

  if (meridiem === "AM")
    if (hour === "12") convertedHour = "00"
    else convertedHour = hour
  else if (meridiem === "PM")
    if (hour === "12") convertedHour = hour
    else convertedHour = +hour + 12
  else convertedHour = hour

  return `${convertedHour}:${minutes}:${seconds}`
}
