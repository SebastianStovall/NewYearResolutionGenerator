export default function getYear() {
  let year = 'Jan 1, 2024'
  let newYear = new Date(year)
  let currentTime = new Date()

  while(currentTime.getTime() > newYear.getTime()) {
    const yearArr = year.split(' ')
    yearArr[2] = Number(yearArr[2])
    yearArr[2]++
    year = yearArr.join(' ')
    newYear = new Date(year)
  }

  return new Date(year).getTime()
}
