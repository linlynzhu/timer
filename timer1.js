const strs = process.argv.slice(2);
let times = [];
for (let str of strs) {
  times.push(Number(str));
}
times.sort(function(a, b) {
  return a - b;
});
for (let time of times) {
  if (!isNaN(time)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  } else {
    break;
  }
}



