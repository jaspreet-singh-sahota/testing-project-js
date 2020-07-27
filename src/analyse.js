const average = (arr) => arr.reduce((acc, num) => acc + num, 0) / arr.length;

const min = (arr) => Math.min(...arr);

const max = (arr) => Math.max(...arr);

const analyse = (arr) => {
  const analysed = {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: arr.length,
  };
  return analysed;
};

export default analyse;