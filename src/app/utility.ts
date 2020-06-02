// '~~()' used as a short substitute for 'Math.floor()'

export const getRandIntInclusive = (min: number, max: number) => {
  [min, max] = [Math.ceil(min), ~~(max)];
  return ~~(Math.random() * (max - min + 1)) + min;
};


export const getRandNums = (size: number, range: [number, number]) => {
  const arr = [];
  while (arr.length < size) {
    const num = getRandIntInclusive(...range);
    arr.indexOf(num) === -1 && arr.push(num);
  }
  return arr;
};

// JavaScript implementation of the Durstenfeld shuffle
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
export const shuffleArray = (arr: number[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = ~~(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};

export const getUniqueValsWithPair = (size: number, range: [number, number]) => {
  const uniqueNums = getRandNums(size / 2, range);
  return shuffleArray([...uniqueNums, ...uniqueNums]);
};
