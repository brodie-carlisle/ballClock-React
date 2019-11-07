export let results = "Enter number between 27 & 127";

export const ballClock = n => {
  const t0 = performance.now();
  n = Number(n);
  if (n < 27 || n > 127) {
    return alert("Number must be between 27 & 127");
  }
  let match = false;
  let count = 0;

  let origArr = Array(n)
    .fill()
    .map((e, i) => i + 1);
  let ballQueue = [...origArr];
  let minutes = [];
  let fiveMin = [];
  let hours = [];
  let loop = 0;

  const returnBalls = src => {
    let i = src.length - 1;
    while (i >= 0) {
      ballQueue.unshift(src[i]);
      src.splice(i, 1);
      i--;
      loop++;
    }
  };
  const checkMatch = (a, b) => {
    for (let i = 0, l = origArr.length; i < l; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  };

  while (match === false) {
    let i = ballQueue.length - 1;
    loop++;
    if (minutes.length < 4) {
      minutes.push(ballQueue[i]);
      ballQueue.splice(i, 1);
    } else if (fiveMin.length < 11) {
      fiveMin.push(ballQueue[i]);
      ballQueue.splice(i, 1);
      returnBalls(minutes);
    } else if (hours.length < 11) {
      hours.push(ballQueue[i]);
      ballQueue.splice(i, 1);
      returnBalls(minutes);
      returnBalls(fiveMin);
    } else if (hours.length >= 11) {
      returnBalls(minutes);
      returnBalls(fiveMin);
      returnBalls(hours);
      i = ballQueue.length - 1;
      ballQueue.unshift(ballQueue[i]);
      ballQueue.pop();
      count++;
      if (checkMatch(origArr, ballQueue)) {
        match = true;
      }
    }
  }
  const t1 = performance.now();
  return (results = `DAYS: ${count / 2},  \n BALLS: ${n},  \n TIME: ${t1 -
    t0} ms`);
};
