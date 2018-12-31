const DATE_WILL_DIFF = (new Date('12/31/2018 17:21:00'));

const timeLeft = (now) => {
  if (now > DATE_WILL_DIFF) {
    return {
      days: 0, hours: 0, min: 0, sec: 0,
    }
  }
  let diff = DATE_WILL_DIFF - now;
  let sec = Math.floor(diff / 1000);
  let min = Math.floor(sec / 60);
  let hours = Math.floor(min / 60);
  const days = Math.floor(hours / 24);
  sec %= 60;
  min %= 60;
  hours %= 24;
  return {
    days, hours, min, sec,
  };
};

export {timeLeft};
