// '~~()' used as a short substitute for 'Math.floor()'

export const getPrimesWithPair = (maxNum = 50) => {
  const primes = findPrimesFaster(maxNum);
  return shuffleArray([...primes, ...primes]);
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

// simple way
export const getPrimes = (target: number) => {
  const sieve = [], primes = [];
  for (let i = 2; i <= target; ++i) {
    if (!sieve[i]) {
      primes.push(i);
      for (let j = i << 1; j <= target; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
};

// More faster variant
// https://levelup.gitconnected.com/finding-all-primes-below-a-given-number-in-javascript-4eb9feaf9a3b
export const findPrimesFaster = (target) => {
  if (target && Number.isInteger(target) && target > 2) {
    let record = [];
    let primes = [2];
    let max = Math.sqrt(target);

    for (let number = 0; number < target; number++) {
      record.push(1);
    }

    for (let prime = 3; prime <= max; prime += 2) {
      if (record[prime]) {
        for (let multiple = prime * prime; multiple < target; multiple += prime * 2) {
          record[multiple] = 0;
        }
      }
    }

    for (let sievedNumber = 3; sievedNumber < target; sievedNumber += 2) {
      if (record[sievedNumber]) {
        primes.push(sievedNumber);
      }
    }

    return primes;
  }

  return [];
};

