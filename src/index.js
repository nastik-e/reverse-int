module.exports = function reverse (n) {
  n = n.toString().split('').reverse().join('')
  n = parseInt(n)
  return n;
}
