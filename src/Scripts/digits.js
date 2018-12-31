const getLastDigit = (number) => {
  return number % 10;
};

const getTenDigit = (number) => {
  return Math.floor((number % 100) / 10);
};

export {getLastDigit, getTenDigit};