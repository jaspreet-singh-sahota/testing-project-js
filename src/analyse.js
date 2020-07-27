const analyse = (arr) => {
  let analysed = {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: arr.length
  }
  return analysed
}

const average = (arr) => {
  return arr.reduce((acc, num) => acc + num, 0) / arr.length;
}

const min = (arr) => {
  return Math.min(...arr)
}

const max = (arr) => {
  return Math.max(...arr)
}

export default analyse