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
