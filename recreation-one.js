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

var m_h2 = 1 // M
var n_h2 = 10 // N
var values_h2 = []
var pair_h2 = [] // pair of values, if the result of the square root is a integer then the pair is added to the array of results.
var result_h2 = [] // array of results in which will be saved the pairs.

for(var e_h2 = m_h2; e_h2 <= n_h2; e_h2++) {

  for(var l_h2 = 1; l_h2 <= e_h2; l_h2++) {
    if(e_h2 % l_h2 == 0) {
      console.log(l_h2, l_h2**2)
      values_h2.push(l_h2**2)
    }
  }
  
  console.log(values_h2) // there are reapeating values that are making the the sum result in a wrong value for the problem

  pair_h2[0] = e_h2
  pair_h2[1] = values_h2.reduce((acc_h2, cur_h2) => acc_h2 + cur_h2, 0)

  console.log(pair_h2)

} // loop to verify each number between m and n



console.groupEnd()
