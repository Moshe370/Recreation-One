console.table([
  {
    KATA: "Integers: Recreation One",
    SRC: "https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript",
    DATE: "2026-08-01"
  }
])

console.group("## HIPOTESYS n° 1")
// ARRAYS CAN RECEIVE OTHER ARRAY AS VALUE IN A SPECIFIC POSITION

array1 = new Array(2)
array2 = [1, 2]

array1[0] = array2

console.log(array1) // yes it can!

console.groupEnd()

console.group("## HIPOTESYS n° 2")

var m_h2 = 20 // M
var n_h2 = 40 // N
var pair_h2 = [] // pair of values, if the result of the square root is a integer then the pair is added to the array of results.
var result_h2 = [] // array of results in which will be saved the pairs.

for(var e = m_h2; e <= n_h2; e++) {

  pair_h2[0] = e
  // tf this loop will do

} // loop to verify each number between m and n

console.groupEnd()
