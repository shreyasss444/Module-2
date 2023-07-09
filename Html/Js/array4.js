var nos = [1, 5, 2, 9, 3];
var m = 0;

nos.map(function(n) {
  if (m < n) {
    m = n;
  }
});

console.log("The largest number is", m);